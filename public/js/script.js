import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);

async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        alert(error.message);
    } else {
        window.location.href = 'dashboard.html';
    }
}

const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', handleLogin);
