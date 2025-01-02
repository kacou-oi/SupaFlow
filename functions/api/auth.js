// functions/api/auth.js
// Gestion des authentifications (login, register)

export async function onRequestPost(context) {
  const { request } = context;
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) {
    return new Response('Email et mot de passe requis', { status: 400 });
  }

  // Logique d'authentification (à implémenter)
  console.log('Tentative d\'authentification avec:', email, password);

  return new Response('Authentification en cours...', { status: 200 });
}
