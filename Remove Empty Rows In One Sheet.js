const removeEmptyRowsInOneSheet = () => {
  try {
    const ss =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName("YourSheetName")
    const maxRows = ss.getMaxRows()
    const lastRow = ss.getLastRow()
    if (maxRows - lastRow != 0) ss.deleteRows(lastRow + 1, maxRows - lastRow)
  } catch (error) {
    console.log(error.message, error.stack)
  }
}
