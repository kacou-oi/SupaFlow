import { getSupabaseClient } from '../config.js';

document.addEventListener('DOMContentLoaded', () => {
    const installForm = document.getElementById('installForm');
    installForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(installForm);
        const adminEmail = formData.get('adminEmail');
        const adminPassword = formData.get('adminPassword');
        const installSampleData = formData.get('installSampleData');

        const supabase = getSupabaseClient();

        try {
            // 1. Create admin user
            console.log('1. Creating admin user...');
            const { data: user, error: userError } = await supabase.auth.signUp({
                email: adminEmail,
                password: adminPassword,
            });

            if (userError) {
                alert('Erreur lors de la création de l\'utilisateur admin: ' + userError.message);
                return;
            }
            console.log('Admin user created successfully.');

            // 2. Initialize database schema
            console.log('2. Initializing database schema from config/database_init.sql...');
            const databaseInitResponse = await fetch('/config/database_init.sql');
            const databaseInitSql = await databaseInitResponse.text();
            const { error: databaseError } = await supabase.rpc('run_sql', { sql: databaseInitSql });

            if (databaseError) {
                console.error('Error initializing database schema:', databaseError);
                alert('Erreur lors de l\'initialisation du schéma de la base de données: ' + databaseError.message);
                return;
            }
            console.log('Database schema initialized successfully.');

            // 3. Install sample data
            if (installSampleData) {
                console.log('3. Installing sample data from config/sample_data.sql...');
                const sampleDataResponse = await fetch('/config/sample_data.sql');
                const sampleDataSql = await sampleDataResponse.text();
                const { error: sampleDataError } = await supabase.rpc('run_sql', { sql: sampleDataSql });

                if (sampleDataError) {
                    console.error('Error installing sample data:', sampleDataError);
                    alert('Erreur lors de l\'installation des données d\'exemple: ' + sampleDataError.message);
                    return;
                }
                console.log('Sample data installed successfully.');
            } else {
                console.log('Skipping sample data installation.');
            }

            alert('Installation terminée avec succès!');
            // Redirect to admin login page
            window.location.href = '/admin/login.html';

        } catch (error) {
            console.error('Installation error:', error);
            alert('Erreur lors de l\'installation: ' + error.message);
        }
    });
});
