const removeEmptyRowsInAllSheets = () => {
  try {
    const ss = SpreadsheetApp.getActive()
    const allsheets = ss.getSheets()
    for (const s in allsheets) {
      const sheet = allsheets[s]
      const maxRows = sheet.getMaxRows()
      const lastRow = sheet.getLastRow()
      if (maxRows - lastRow != 0)
        sheet.deleteRows(lastRow + 1, maxRows - lastRow)
    }
  } catch (error) {
    console.log(error.message, error.stack)
  }
}
