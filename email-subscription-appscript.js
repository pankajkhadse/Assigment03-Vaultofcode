
function doPost(e) {
  // First, let's check what sheets are available
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = spreadsheet.getSheets();
  const sheetNames = sheets.map(sheet => sheet.getName());
  
  console.log("Available sheets:", sheetNames);
  
  let sheetName = "Sheet1";
  let sheet = spreadsheet.getSheetByName(sheetName);
  
  if (!sheet) {
    return ContentService.createTextOutput("Error: Sheet '" + sheetName + "' not found. Available sheets: " + sheetNames.join(", "));
  }
  
  let newRow = sheet.getLastRow() + 1;
  let rowData = [];
  
  rowData.push(new Date());
  rowData.push(e.parameter.Email || '');
  
 
  sheet.getRange(newRow, 1, 1, rowData.length).setValues([rowData]);
  
  return ContentService.createTextOutput('Subscribed');
}
