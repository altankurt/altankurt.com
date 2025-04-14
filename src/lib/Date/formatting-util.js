const formattedDate = date =>
  new Date(date).toLocaleDateString('en-EN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

export { formattedDate }
