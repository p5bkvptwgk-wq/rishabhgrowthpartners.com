# Rishabh Growth Partners - Website & Database Integration

Yeh updated package aapki website ke form ko direct aapki Google Sheet Database se connect karne ke liye taiyar kiya gaya hai:

Spreadsheet Link:
https://docs.google.com/spreadsheets/d/1w7zPrXEA_uoQtRzM7XYw5O7vn_HZ9vGFLdHL7YNX44Y/edit

## Setup Steps:

1. **Google Apps Script Deploy Karein:**
   - Apni Google Sheet open karein.
   - `Extensions` > `Apps Script` me jayein.
   - `google-apps-script.js` ka code paste karein aur Save karein.
   - `Deploy` > `New deployment` > Select `Web app`
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Deploy par click karein aur Web App URL copy karein.

2. **Website me Web App URL Dalein:**
   - `index.html` file open karein.
   - Script tag me `GOOGLE_SHEET_WEBAPP_URL` variable me apna Apps Script Web App URL paste karein.
   - GitHub repo par commit aur push kar dein.
