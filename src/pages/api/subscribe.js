// Rate limiting için basit bir in-memory store
const rateLimitStore = new Map();

// Rate limit ayarları
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 dakika
const MAX_REQUESTS = 3; // 15 dakikada maksimum 3 istek

// Rate limit kontrolü
function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimitStore.get(ip) || { count: 0, timestamp: now };

  // Eğer zaman penceresi geçmişse, sayacı sıfırla
  if (now - userRequests.timestamp > RATE_LIMIT_WINDOW) {
    userRequests.count = 0;
    userRequests.timestamp = now;
  }

  // İstek sayısını artır
  userRequests.count++;

  // Yeni durumu kaydet
  rateLimitStore.set(ip, userRequests);

  // Rate limit aşıldı mı kontrol et
  return userRequests.count <= MAX_REQUESTS;
}

export default async function handler(req, res) {
  // 1. CORS kontrolü
  const allowedOrigins = [
    'https://altankurt.com',
    'https://altankurt.dev',
    'http://localhost:3000',
  ];
  const origin = req.headers.origin;

  if (!allowedOrigins.includes(origin)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  // 2. Method kontrolü
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 3. Rate limit kontrolü
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  if (!checkRateLimit(ip)) {
    return res.status(429).json({
      error: 'Too many requests. Please try again later.',
      retryAfter: Math.ceil(RATE_LIMIT_WINDOW / 1000),
    });
  }

  // 4. Input validasyonu
  const { email } = req.body;
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Email format kontrolü
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Email uzunluk kontrolü
  if (email.length > 254) {
    return res.status(400).json({ error: 'Email is too long' });
  }

  const API_KEY = process.env.OCTOPUS_API_KEY;
  const LIST_ID = process.env.OCTOPUS_LIST_ID;

  try {
    // 5. API Key ve List ID kontrolü
    if (!API_KEY || !LIST_ID) {
      console.error('Missing API configuration:', {
        hasApiKey: !!API_KEY,
        hasListId: !!LIST_ID,
      });
      return res.status(500).json({ error: 'Internal server error' });
    }

    console.log('Attempting to add contact:', {
      email,
      listId: LIST_ID,
      timestamp: new Date().toISOString(),
      ip: ip,
    });

    // 6. Email Octopus API çağrısı
    const addContactResponse = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${LIST_ID}/contacts`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: API_KEY,
          email_address: email,
          status: 'SUBSCRIBED',
        }),
      }
    );

    const contactData = await addContactResponse.json();

    console.log('Email Octopus API Response:', {
      status: addContactResponse.status,
      data: contactData,
    });

    if (!addContactResponse.ok) {
      console.error('Email Octopus API Error:', {
        status: addContactResponse.status,
        message: contactData.message,
        email: email,
        response: contactData,
        ip: ip,
      });
      throw new Error(contactData.message || 'Failed to add contact');
    }

    // 7. Başarılı kayıt logu
    console.log('Successful subscription:', {
      email: email,
      timestamp: new Date().toISOString(),
      response: contactData,
      ip: ip,
    });

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    // 8. Genel hata yönetimi
    console.error('Subscription Error:', {
      error: error.message,
      email: email,
      timestamp: new Date().toISOString(),
      stack: error.stack,
      ip: ip,
    });
    return res.status(500).json({ error: error.message });
  }
}
