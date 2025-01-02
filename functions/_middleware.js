// functions/_middleware.js
// Middleware global pour toutes les routes

export async function onRequest(context) {
  try {
    const authHeader = context.request.headers.get('Authorization');

    if (!authHeader) {
      return new Response('Unauthorized', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Bearer' },
      });
    }

    // Si l'en-tête est présent, passer la requête au prochain gestionnaire
    return await context.next();
  } catch (error) {
    console.error('Erreur dans le middleware :', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
