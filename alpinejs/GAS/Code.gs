function doGet(e) {
  const params = e.parameter;
  const sheetName = params.sheet || 'menu'; // por defecto 'menu'

  const spreadsheet = SpreadsheetApp.openById('1YiXpWuNaiFF5g1WmvlpQhpNkpDVTYq6jeHNDGu6xGhE');
  const sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: `Sheet '${sheetName}' not found.` }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const range = sheet.getDataRange();
  const values = range.getValues();

  if (values.length < 2) {
    return ContentService
      .createTextOutput(JSON.stringify([]))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const headers = values[0];
  const data = values.slice(1).map((row, index) => {
    const entry = { row: index + 2 }; // +2 por encabezado + 1 index base 0
    headers.forEach((header, i) => {
      entry[header.trim()] = row[i];
    });
    return entry;
  });

  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
