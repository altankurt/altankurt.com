import ShareSocial from '../../ShareSocial'
import { DateReadTime } from '../DateReadTime'
import Image from 'next/image'

const PostHeader = props => {
  const { title, date, readTime, slug, cover, excerpt } = props

  return (
    <header className="relative">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight my-8 sm:my-10 leading-tight">
        {title}
      </h1>
      {excerpt && (
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{excerpt}</p>
      )}
      <section className="mb-8 flex items-center justify-between gap-2">
        <DateReadTime date={date} timeToRead={readTime} />
        <ShareSocial slug={slug} title={title} />
      </section>
      {cover && (
        <div className="relative w-full h-[35vh]">
          <Image
            src={cover}
            alt={title}
            className="rounded-xl object-cover object-center"
            fill
            priority
          />
        </div>
      )}
    </header>
  )
}

export default PostHeader
