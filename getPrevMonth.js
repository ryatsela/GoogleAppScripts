const getPrevMonth = () => {
  const d = new Date()
  let prevMonth = d.getMonth()
  if (prevMonth === 0) {
    prevMonth += 1
  }
  return prevMonth
}
