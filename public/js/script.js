import { createClient } from '@supabase/supabase-js';
import { getSupabaseClient } from '../config.js';

async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const supabase = getSupabaseClient();

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
