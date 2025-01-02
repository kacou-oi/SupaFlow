// functions/_middleware.js
// Middleware global pour toutes les routes
export async function onRequest(context) {
  // Exemple de logique de middleware
  console.log('Middleware exécuté');
  return await context.next();
}
