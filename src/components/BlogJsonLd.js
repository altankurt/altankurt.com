const BlogJsonLd = ({ post }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          author: {
            '@type': 'Person',
            name: 'Altan Kurt',
            url: 'https://altankurt.com/about',
            sameAs: [
              'https://twitter.com/altankurt',
              'https://linkedin.com/in/altankurt',
              'https://github.com/altankurt',
            ],
          },
          datePublished: post.date,
          dateModified: post.modifiedDate || post.date,
          image: {
            '@type': 'ImageObject',
            url: post.coverImage,
            width: '1200',
            height: '630',
          },
          url: `https://altankurt.com/blog/${post.slug}`,
          publisher: {
            '@type': 'Organization',
            name: 'Altan Kurt',
            logo: {
              '@type': 'ImageObject',
              url: 'https://altankurt.com/logo.png',
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://altankurt.com/blog/${post.slug}`,
          },
          keywords: post.tags?.join(', '),
          articleSection: post.section || 'Technology',
          inLanguage: 'en-US',
        }),
      }}
    />
  )
}

export default BlogJsonLd
