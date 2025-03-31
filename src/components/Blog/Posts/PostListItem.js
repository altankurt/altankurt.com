import Image from 'next/image'
import Link from 'next/link'
import { DateReadTime } from './DateReadTime'

function cutAndAddEllipsis(str) {
  var words = str.split(' ')

  if (words.length > 30) {
    var trimmedString = words.slice(0, 30).join(' ') + '...'
    return trimmedString
  } else {
    return str
  }
}

const PostListItem = ({ post }) => {
  const { title, excerpt, date, slug, readTime, cover } = post

  const linkPath = `/blog/posts/${slug}`
  const coverPath = `/blog/posts/${slug}/${cover}`

  return (
    <li className="group relative flex flex-col rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#17191e] hover:shadow-xl transition-all duration-300">
      <Link href={linkPath} className="flex flex-col h-full">
        <div className="relative h-48 overflow-hidden">
          <Image
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            src={coverPath}
            alt={title}
            fill={true}
          />
        </div>
        <div className="flex flex-col flex-grow p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-primary transition-colors duration-200">
            {title}
          </h2>
          <DateReadTime date={date} timeToRead={readTime} />
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            {cutAndAddEllipsis(excerpt)}
          </p>
          <div className="mt-6 flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-200">
            Read more
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default PostListItem
