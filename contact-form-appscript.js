
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
  rowData.push(e.parameter.Name || '');
  rowData.push(e.parameter.Email || '');
  rowData.push(e.parameter.PhoneNumber || '');
  rowData.push(e.parameter.Message || '');
  
  sheet.getRange(newRow, 1, 1, rowData.length).setValues([rowData]);
  
  return ContentService.createTextOutput('Form submission was successful. Thank you. We will get back to you within 24 hours');
}
