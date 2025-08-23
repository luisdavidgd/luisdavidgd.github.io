export async function onRequest({ request, env }) {
  const { searchParams } = new URL(request.url);
  const sheetName = searchParams.get('sheet') || 'menu'; // valor por defecto
  const GOOGLE_SPREADSHEET_ID = env.GOOGLE_SPREADSHEET_ID

  const apiUrl = `https://script.google.com/macros/s/${GOOGLE_SPREADSHEET_ID}/exec?sheet=${encodeURIComponent(sheetName)}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`Error al obtener datos de la hoja "${sheetName}"`);

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
