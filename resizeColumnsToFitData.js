//In this case I use sheetName from another function, because I have many sheets that use this function, so I use variable, but you can change it from (`${sheetName}`) to (`YourSheetName`)

const resizeColumnsToFitData = sheetName => {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
      `${sheetName}`
    )
    sheet.autoResizeColumns(1, sheet.getLastColumn())
  } catch (error) {
    console.log(error.message, error.stack)
  }
}
