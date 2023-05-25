const collectSheetNames = () => {
  try {
    const out = new Array()
    const sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets()
    for (let i in sheets) {
      out.push(`${[sheets[i].getName()]}`)
    }
    return out
    // return out.toString().replaceAll(",", ";") // to select sheet names it in string format
  } catch (error) {
    console.log(error.message, error.stack)
  }
}
