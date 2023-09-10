import ShareSocial from '../../share';
import { DateReadTime } from '../date-read-time';

const PostHeader = (props) => {
  const { title, date, readTime, slug } = props;

  return (
    <header className="relative">
      <h1 className="h1 mb-2">{title}</h1>
      <section className="mb-2 flex items-center justify-between  gap-2">
        <DateReadTime date={date} timeToRead={readTime} />
        <ShareSocial slug={slug} title={title} />
      </section>
    </header>
  );
};

export default PostHeader;
