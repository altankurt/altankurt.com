import { formattedDate } from '../../../lib/date/formatting-util';

const DateReadTime = ({ date, timeToRead }) => (
  <div className="flex flex-col items-start font-mono text-xs tracking-tight text-gray-500 dark:text-dark-text/60 sm:flex-row sm:items-center sm:text-sm">
    <time dateTime={date}>{formattedDate(date)}</time>
    <span className="mx-2 hidden sm:inline-block" aria-hidden="true">
      &middot;
    </span>
    <span>{timeToRead}</span>
  </div>
);

export { DateReadTime };
