function refreshData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(`YourSheetName`)
  var range = ss.getRange("A1")
  var cell = range.getCell(1, 1)
  var save = cell.getFormula()
  range.clear
  SpreadsheetApp.flush() // wait till it's all done
  cell.setFormula(save)
}
