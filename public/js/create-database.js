import { createClient } from '@supabase/supabase-js';

const supabaseUrl = document.querySelector('input[name="supabaseUrl"]').value;
const supabaseKey = document.querySelector('input[name="supabaseKey"]').value;
const supabase = createClient(supabaseUrl, supabaseKey);

htmx.on('htmx:configRequest', (event) => {
  event.detail.headers.set('Supabase-Anon-Key', supabaseKey);
  event.detail.headers.set('Supabase-URL', supabaseUrl);
});

document.getElementById('installForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const projectName = formData.get('projectName');
  const adminEmail = formData.get('adminEmail');
  const adminPassword = formData.get('adminPassword');
  const installSampleData = formData.get('installSampleData');

  const { data, error } = await supabase.auth.signUp({
    email: adminEmail,
    password: adminPassword,
  });

  if (error) {
    document.getElementById('error-message').innerText = error.message;
  } else {
    // Handle successful signup and database initialization
    console.log('Admin user created:', data);
    // Redirect or display success message
  }
});
