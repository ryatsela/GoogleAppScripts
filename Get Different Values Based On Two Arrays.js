const getDifferentValues = () => {
  const sheetName =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(`YourSheetName`)
  const getUserValues = sheetName
    .getRange("YotuSheetName!RangeFrom:RangeTo") // .getRange("Sheet1!A1:A") - get data from A1 - to the end of the range in A column
    .getValues() //select values for comparison
    .flat()
    .filter(r => r != "")
  const getUserValuesOld = sheetName
    .getRange("YotuSheetName!RangeFrom:RangeTo") // .getRange("Sheet1!A1:A") - get data from A1 - to the end of the range in A column
    .getValues() //select the values to be compared with
    .flat()
    .filter(r => r != "")
  // Logger.log(getUserValuesOld)

  const DifferentValues = [...new Set(getUserValues)].filter(
    x => !getUserValuesOld.includes(x)
  )
  // Logger.log(DifferentValues)

  return DifferentValues
}
