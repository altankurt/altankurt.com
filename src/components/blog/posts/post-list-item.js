import Image from 'next/image';
import Link from 'next/link';
import { DateReadTime } from './date-read-time';

function cutAndAddEllipsis(str) {
  var words = str.split(' ');

  if (words.length > 30) {
    var trimmedString = words.slice(0, 30).join(' ') + '...';
    return trimmedString;
  } else {
    return str;
  }
}
const PostListItem = ({ post }) => {
  const { title, excerpt, date, slug, readTime, cover } = post;

  const linkPath = `/blog/posts/${slug}`;
  const coverPath = `/blog/posts/${slug}/${cover}`;
  console.log(coverPath);
  return (
    <li className="group rounded-xl overflow-hidden">
      <Link className="sm:flex" href={linkPath}>
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image
            className="group-hover:scale-110 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
            src={coverPath}
            alt={title}
            fill={true}
          />
        </div>
        <div className="grow flex flex-col justify-center mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
          <h2 className="h5 font-bold pb-4">{title}</h2>
          <DateReadTime date={date} timeToRead={readTime} />
          <p className=" text-color pt-1 text-base">
            {cutAndAddEllipsis(excerpt)}
          </p>
          <p className="mt-2 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
            Read more
          </p>
        </div>
      </Link>
    </li>
  );
};

export default PostListItem;
