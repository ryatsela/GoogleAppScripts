const getLastDayInMonth = () => {
  const now = new Date()
  const lastDayInMonth = new Date(
    now.getFullYear(),
    now.getMonth(),
    0
  ).getDate()
  return lastDayInMonth
}
