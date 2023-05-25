//In this case I use sheetName from another function, because I have many sheets that use this function, so I use variable, but you can change it from (`${sheetName}`) to (`YourSheetName`)

const changeColumnType = sheetName => {
  const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    `${sheetName}`
  )
  //Change type to day year month
  ss.getRange("J:J").setNumberFormat("Dd/mm/yyyy")
  //Change type to number format
  ss.getRange("G:G").setNumberFormat("@")
}
