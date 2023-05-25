//This function was created to interact with the formatAllRowsWithVal function, but you can also use it directly

function selectMarkedValues() {
  try {
    const ss = SpreadsheetApp.getActive()
    const sh = ss.getSheetByName("YorSheetName1") // put the name of the source sheet
    const target_sh = ss.getSheetByName("YorSheetName2") // put the name of the target sheet
    target_sh.getRange("YotuSheetName!RangeFrom:RangeTo").clearContent() //delete this line if you do not want to clear the range, but be careful because the colour of your cells will always be #0b5394
    const colors = sh
      .getRange("YotuSheetName!RangeFrom:RangeTo")
      .getBackgrounds()
      .flat() // .getRange("Sheet1!A1:A") - get data from A1 - to the end of the range in A column
    const values = sh.getDataRange().getValues()
    if (values.filter((_, i) => colors[i] == "#0b5394").length == 0) {
      return ""
    } else {
      const new_values = values.filter((_, i) => colors[i] == "#0b5394")
      target_sh
        .getRange(1, 1, new_values.length, new_values[0].length)
        .setValues(new_values)
    }
  } catch (e) {}
}
