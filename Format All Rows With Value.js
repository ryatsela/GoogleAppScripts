//For this function to work, the runFormatting function must be executed. formatAllRowsWithVal need not be called

function runFormatting() {
  const text = "Your search text" //For example, we can use the getSameNums function to select numbers that are different from those being compared.
  const sheetName = "YourSheetName"
  text.forEach(e => formatAllRowsWithVal(e, sheetName))
}

formatAllRowsWithVal = (text, sheetName) => {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const range = "YotuSheetName!RangeFrom:RangeTo" // .getRange("Sheet1!A1:A") - get data from A1 - to the end of the range in A column
  const sheet = ss.getSheetByName(sheetName).getRange(range)
  const sheetN = ss.getSheetByName(sheetName)

  const textFinder = sheet.createTextFinder(text).matchEntireCell(true)
  const allOccurrences = textFinder.findAll()

  const ranges = allOccurrences.map(
    item => `AJ${item.getRow()}:AJ${item.getRow()}` //AJ is example column, you can chose your own
  )

  sheetN
    .getRangeList(ranges)
    .setBackground("#0b5394")
    .setFontColor("white")
    .setFontWeight("bold")
}
