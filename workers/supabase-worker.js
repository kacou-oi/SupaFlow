import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'YOUR_SUPABASE_URL'; // Remplacez par l'URL de votre projet Supabase
const SUPABASE_API_KEY = 'YOUR_SUPABASE_ANON_KEY'; // Remplacez par votre clé API anonyme Supabase

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const { pathname } = new URL(request.url);

  if (request.method === 'POST' && pathname === '/save-template') {
    return saveTemplate(request);
  } else if (request.method === 'GET' && pathname === '/get-templates') {
    return getTemplates();
  } else if (request.method === 'POST' && pathname === '/auth/login') {
    return handleLogin(request);
  } else if (request.method === 'POST' && pathname === '/auth/register') {
    return handleRegister(request);
  } else if (request.method === 'POST' && pathname === '/auth/reset-password') {
    return handleResetPassword(request);
  }
   else {
    return new Response('Endpoint not found', { status: 404 });
  }
}

async function handleLogin(request) {
  try {
    const { email, password } = await request.json();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ message: 'Connexion réussie', data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

async function handleRegister(request) {
  try {
    const { email, password } = await request.json();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ message: 'Inscription réussie, veuillez vérifier votre email', data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

async function handleResetPassword(request) {
  try {
    const { email } = await request.json();
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:8788/update-password', // Modifier avec l'URL de votre page de mise à jour du mot de passe
    });
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ message: 'Un lien de réinitialisation a été envoyé à votre adresse email.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

async function saveTemplate(request) {
  try {
    const { name, content } = await request.json();
    if (!name || !content) {
      return new Response('Missing name or content', { status: 400 });
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/templates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_API_KEY,
        'Authorization': `Bearer ${SUPABASE_API_KEY}`,
        'Prefer': 'return=representation',
      },
      body: JSON.stringify({ name, content }),
    });

    if (response.ok) {
      const template = await response.json();
      return new Response(JSON.stringify(template), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      console.error('Error saving template:', response.status, await response.text());
      return new Response('Error saving template', { status: response.status });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response('Internal server error', { status: 500 });
  }
}

async function getTemplates() {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/templates`, {
      headers: {
        'apikey': SUPABASE_API_KEY,
        'Authorization': `Bearer ${SUPABASE_API_KEY}`,
      },
    });

    if (response.ok) {
      const templates = await response.json();
      return new Response(JSON.stringify(templates), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      console.error('Error getting templates:', response.status, await response.text());
      return new Response('Error getting templates', { status: response.status });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
