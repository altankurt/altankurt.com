import Head from 'next/head'

const Meta = props => {
  const {
    title,
    description,
    url,
    image,
    type = 'website',
    locale = 'en',
    publishedTime,
    modifiedTime,
    authors,
    tags,
    keywords,
    readingTime,
    section,
    siteName = 'Altan Kurt',
  } = props

  const defaultTitle = 'Altan Kurt - Product Manager'
  const defaultDescription =
    'Altan is a product manager focused on solving the right problems, aligning teams around clear goals, and delivering meaningful digital products. Creator of the Zero to Product newsletter.'
  const defaultUrl = 'https://altankurt.com'
  const defaultImage = 'https://altankurt.com/social-bg.png'

  return (
    <Head>
      {/* Temel Meta Etiketleri */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content={locale} />
      <link rel="icon" href="/favicon.ico" />

      {/* Temel SEO Meta Etiketleri */}
      <title key="title">{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={authors?.join(', ') || 'Altan Kurt'} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={url || defaultUrl} />

      {/* Open Graph Meta Etiketleri */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:alt" content={title || defaultTitle} />
      <meta property="og:locale" content={locale} />

      {/* Twitter Card Meta Etiketleri */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@altankurt" />
      <meta name="twitter:creator" content="@altankurt" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:image:alt" content={title || defaultTitle} />

      {/* Blog Post için Ek Meta Etiketler */}
      {type === 'article' && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {authors?.map(author => (
            <meta key={author} property="article:author" content={author} />
          ))}
          {tags?.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
          {section && <meta property="article:section" content={section} />}
          {readingTime && <meta property="article:read_time" content={readingTime} />}
        </>
      )}

      {/* Apple Specific Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content={siteName} />

      {/* Microsoft/IE Meta Tags */}
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Theme Color */}
      <meta name="theme-color" content="#000000" />

      {/* Favicon ve App Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* RSS Feed */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`${siteName} RSS Feed`}
        href="/feed.xml"
      />

      {props.children}
    </Head>
  )
}

export default Meta
