import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { railscasts } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import PostHeader from './PostHeader'
import Image from 'next/image'

const PostContent = ({ post, className }) => {
  const coverImagePath = post.cover && `/blog/posts/${post.slug}/${post.cover}`

  const customRenderers = {
    h2(h2) {
      return (
        <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-2 leading-normal">
          {h2.children}
        </h2>
      )
    },

    h3(h3) {
      return <h3 className="text-xl font-semibold leading-6 mt-8">{h3.children}</h3>
    },

    h4(h4) {
      return (
        <h4 className="text-2xl font-semibold tracking-tight mt-3 mb-1 leading-tight">
          {h4.children}
        </h4>
      )
    },

    h5(h5) {
      return (
        <h5 className="text-xl font-semibold tracking-tight mt-3 mb-1 leading-tight">
          {h5.children}
        </h5>
      )
    },

    blockquote(quote) {
      return (
        <blockquote className="mt-[42px] border-l-4 border-primary pl-3">
          {quote.children}
        </blockquote>
      )
    },

    li(li) {
      return (
        <li className="text-lg font-normal leading-6 my-2 before:mr-2 before:h-4 before:w-4 before:content-['•']">
          {li.children}
        </li>
      )
    },

    p(paragraph) {
      const { node } = paragraph

      if (node.children[0].tagName === 'img') {
        const image = node.children[0]
        return (
          <figure>
            <Image
              src={`/blog/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              className="h-full w-full mt-8 rounded-xl object-cover object-center"
              width={720}
              height={720}
            />
            <figcaption className="mx-auto mt-1 text-center text-xs">
              {image.properties.title}
            </figcaption>
          </figure>
        )
      }
      return <p className="text-lg font-normal my-3 leading-6">{paragraph.children}</p>
    },

    a(link) {
      return (
        <a
          href={link.href}
          className="text-primary text-lg underline font-normal tracking-tight leading-8"
          target={'_blank'}
        >
          {link.children}
        </a>
      )
    },

    code(code) {
      if (code.inline) {
        return (
          <code className="text-xl font-serif code-color rounded-sm p-1">{code.children[0]}</code>
        )
      }
      return (
        <SyntaxHighlighter language="javascript" style={railscasts}>
          {code.children[0]}
        </SyntaxHighlighter>
      )
    },
  }

  return (
    <>
      <article className={`mx-auto max-w-5xl ${className}`}>
        <PostHeader title={post.title} date={post.date} readTime={post.readTime} slug={post.slug} />
        <div className="relative h-[35vh]">
          {coverImagePath && (
            <Image
              className="rounded-xl object-cover object-center"
              src={coverImagePath}
              alt={post.title}
              fill
            />
          )}
        </div>
        <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
      </article>
    </>
  )
}

export default PostContent
