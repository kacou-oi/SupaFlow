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

// Handle the /admin/update-env route
if (window.location.pathname === '/admin/update-env') {
    window.addEventListener('load', async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const supabaseUrl = urlParams.get('supabaseUrl');
        const supabaseKey = urlParams.get('supabaseKey');

        if (supabaseUrl && supabaseKey) {
            try {
                const response = await fetch('/admin/update-env-handler', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ supabaseUrl, supabaseKey }),
                });

                if (response.ok) {
                    console.log('Supabase credentials saved successfully.');
                } else {
                    const message = await response.text();
                    console.error('Error saving Supabase credentials:', message);
                }
            } catch (error) {
                console.error('Error saving Supabase credentials:', error);
            }
        }
    });
}
