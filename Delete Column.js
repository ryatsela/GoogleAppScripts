//In this case I use sheetName from another function, because I have many sheets that use this function, so I use variable, but you can change it from (`${sheetName}`) to (`YourSheetName`)

const deleteColumn = sheetName => {
  try {
    SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName(`${sheetName}`)
      .deleteColumn(2)
  } catch (error) {
    console.log(error.message, error.stack)
  }
}
