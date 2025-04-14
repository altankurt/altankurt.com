import Head from 'next/head'

const Meta = props => {
  const { title, description, url, image } = props
  const defaultTitle = 'Altan Kurt - Product Manager'
  const defaultDescription =
    'Altan is a product manager focused on solving the right problems, aligning teams around clear goals, and delivering meaningful digital products. Creator of the Zero to Product newsletter.'
  const defaultUrl = 'https://altankurt.com'
  const defaultImage = 'https://altankurt.com/social-bg.png'

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="en" /> <link rel="icon" href="/favicon.ico" />
      <title key="title">{title || defaultTitle}</title>
      <meta name="site_name" content={defaultTitle} />
      <meta key="description" name="description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" name="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        name="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:url" name="og:url" content={url || defaultUrl} />
      <meta property="og:image" name="og:image" content={image || defaultImage} />
      <link rel="canonical" href={url || defaultUrl} />
      {props.children}
    </Head>
  )
}

export default Meta
