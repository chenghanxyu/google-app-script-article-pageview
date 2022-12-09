var ss = SpreadsheetApp.getActiveSpreadsheet();  // 設定要取得資料的文件
var sheet = ss.getSheetByName("Pageview");       //要取得資料的分頁
var range = sheet.getRange("A:B");               // 設定資料範圍
var data = range.getValues();                    // 取得資料陣列

function doGet() {
  var dataExportFormat = JSON.stringify(data); // 將資料陣列轉換成為 Json 格式
  return ContentService.createTextOutput(dataExportFormat).setMimeType(ContentService.MimeType.JSON); // 回傳資料
}
