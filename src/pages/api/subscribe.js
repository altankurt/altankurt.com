export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;
  const API_KEY = process.env.OCTOPUS_API_KEY;
  const LIST_ID = process.env.OCTOPUS_LIST_ID;

  try {
    // Add the contact to the list
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

    if (!addContactResponse.ok) {
      throw new Error(contactData.message || 'Failed to add contact');
    }

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
