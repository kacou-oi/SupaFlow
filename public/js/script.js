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

async function handleAdminCreation(event) {
    event.preventDefault();

    const siteName = document.getElementById('siteName').value;
    const adminEmail = document.getElementById('adminEmail').value;
    const adminPassword = document.getElementById('adminPassword').value;
    const errorDiv = document.getElementById('error-message');
    const installationUrl = window.location.origin;

    const { data: user, error: signUpError } = await supabase.auth.signUp({
        email: adminEmail,
        password: adminPassword,
    });

    if (signUpError) {
        errorDiv.textContent = signUpError.message;
        return;
    }

    const { error: userError } = await supabase
        .from('users')
        .insert([{ email: adminEmail }]);

    if (userError) {
        errorDiv.textContent = userError.message;
        return;
    }

    const { error: settingsError } = await supabase
        .from('settings')
        .insert([{ site_name: siteName, installation_url: installationUrl, admin_email: adminEmail }]);

    if (settingsError) {
        errorDiv.textContent = settingsError.message;
        return;
    }

    window.location.href = 'dashboard.html';
}

const adminForm = document.getElementById('adminForm');
if (adminForm) {
    adminForm.addEventListener('submit', handleAdminCreation);
}

async function testSupabaseConnection() {
    const statusDiv = document.getElementById('supabase-status');
    statusDiv.textContent = 'Test de connexion en cours...';
    try {
        const { data, error } = await supabase.from('settings').select('*').limit(1);
        if (error) {
            statusDiv.textContent = 'Erreur de connexion à Supabase : ' + error.message;
        } else {
            statusDiv.textContent = 'Connexion à Supabase réussie !';
        }
    } catch (error) {
        statusDiv.textContent = 'Erreur de connexion à Supabase : ' + error.message;
    }
}

document.getElementById('testSupabase').addEventListener('click', testSupabaseConnection);
