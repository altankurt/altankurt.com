import { formattedDate } from '../../../lib/Date/formatting-util'

const DateReadTime = ({ date, timeToRead }) => (
  <div className="flex flex-col items-start tracking-tight date-color sm:flex-row sm:items-center sm:text-sm">
    <time dateTime={date}>{formattedDate(date)}</time>
    <span className="mx-2 hidden sm:inline-block" aria-hidden="true">
      &middot;
    </span>
    <span>{timeToRead}</span>
  </div>
)

export { DateReadTime }
