import Head from 'next/head';

const Meta = (props) => {
  const { title, description, type, url, image } = props;
  const defaultTitle = 'Altan Kurt';
  const defaultDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ';
  const defaultUrl = 'https://altankurt.dev';
  const defaultImage = 'https://altankurt.dev/social-bg.png';
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <title key="title">{title || defaultTitle}</title>
      <meta name="site_name" content="Altan Kurt Personal Website" />
      <meta
        key="description"
        name="description"
        content={description || defaultDescription}
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        name="og:title"
        content={title || defaultTitle}
      />
      <meta
        property="og:description"
        name="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:url" name="og:url" content={url || defaultUrl} />
      <meta
        property="og:image"
        name="og:image"
        content={image || defaultImage}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@aaltankurt" />
      <meta name="twitter:creator" content="@aaltankurt" />
      <meta name="twitter:title" content="Altan Kurt" />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image || defaultImage} />
      {props.children}
    </Head>
  );
};

export default Meta;
