import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === '/create-page' && request.method === 'POST') {
    return handleCreatePage(request);
  } else if (path.startsWith('/page/') && request.method === 'GET') {
    return handleGetPage(request);
  } else if (path.startsWith('/page/') && request.method === 'PUT') {
    return handleUpdatePage(request);
  }

  return new Response('Not found', { status: 404 });
}

async function handleCreatePage(request) {
  const contentType = request.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    return new Response('Expected application/json', { status: 400 });
  }
  try {
    const { title, slug } = await request.json();
    const { data, error } = await supabase
      .from('pages')
      .insert([{ title, slug }]);

    if (error) {
      console.error(error);
      return new Response('Error creating page', { status: 500 });
    }

    return new Response(JSON.stringify(data), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response('Invalid JSON', { status: 400 });
  }
}

async function handleGetPage(request) {
  const id = request.url.split('/').pop();
  const { data, error } = await supabase
    .from('pages')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    return new Response('Error fetching page', { status: 500 });
  }

  if (!data) {
    return new Response('Page not found', { status: 404 });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function handleUpdatePage(request) {
  const id = request.url.split('/').pop();
  const contentType = request.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    return new Response('Expected application/json', { status: 400 });
  }
  try {
    const { title, slug } = await request.json();
    const { data, error } = await supabase
      .from('pages')
      .update({ title, slug })
      .eq('id', id);

    if (error) {
      console.error(error);
      return new Response('Error updating page', { status: 500 });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response('Invalid JSON', { status: 400 });
  }
}
