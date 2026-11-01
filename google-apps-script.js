
const SHEET_NAME = 'Client Directory';

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet();
    
    // Parse incoming data
    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    const clientName = data.clientName || data.name || '';
    const email = data.email || '';
    const phone = data.phone || '';

    // Calculate Serial Number based on data rows
    const lastRow = sheet.getLastRow();
    // In our sheet, headers are at Row 4
    const srNo = lastRow >= 4 ? (lastRow - 4) + 1 : 1;

    // Current Date formatted as YYYY-MM-DD
    const dateStr = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || 'Asia/Kolkata', 'yyyy-MM-dd');

    // Append to sheet
    sheet.appendRow([
      srNo,
      dateStr,
      clientName,
      email,
      phone
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: 'success', srNo: srNo }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Rishabh Growth Partners Webhook Active");
}
