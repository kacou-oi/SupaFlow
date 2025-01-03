import { getSupabaseClient } from '../config.js';

document.addEventListener('DOMContentLoaded', () => {
    const installForm = document.getElementById('installForm');
    installForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(installForm);
        const projectName = formData.get('projectName');
        const supabaseUrl = formData.get('supabaseUrl');
        const supabaseKey = formData.get('supabaseKey');
        const adminEmail = formData.get('adminEmail');
        const adminPassword = formData.get('adminPassword');
        const installSampleData = formData.get('installSampleData');

        const envContent = `export const supabaseUrl = '${supabaseUrl}';
export const supabaseKey = '${supabaseKey}';
export const siteUrlProd = ''; // À remplacer par l'URL de production
export const adminEmail = '${adminEmail}';
export const adminPassword = '${adminPassword}';
`;

        try {
            // Write environment variables to config/env.js
            const response = await fetch('/tool_code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tool_name: 'write_to_file',
                    arguments: {
                        path: 'config/env.js',
                        content: envContent,
                    },
                }),
            });

            if (!response.ok) {
                const message = `Error writing to config/env.js: ${response.status} - ${await response.text()}`;
                console.error(message);
                alert(message);
                return;
            }

            const supabase = getSupabaseClient();

            // 1. Create admin user
            console.log('1. Creating admin user...');
            const { data: user, error: userError } = await supabase.auth.signUp({
                email: adminEmail,
                password: adminPassword,
            });

            if (userError) {
                alert('Error creating admin user: ' + userError.message);
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
                alert('Error initializing database schema: ' + databaseError.message);
                return;
            }
            console.log('Database schema initialized successfully.');

            // 3. Install sample data
            if (installSampleData) {
                console.log('3. Installing sample data from config/sample_data.sql...');
                const sampleDataResponse = await fetch('/config/sample_data.sql');
                const sampleDataSql = await sampleDataResponse.text();
                const { error: sampleDataError } = await supabase.rpc('run_sql', { sql: sampleDataError });

                if (sampleDataError) {
                    console.error('Error installing sample data:', sampleDataError);
                    alert('Error installing sample data: ' + sampleDataError.message);
                    return;
                }
                console.log('Sample data installed successfully.');
            } else {
                console.log('Skipping sample data installation.');
            }

            alert('Installation successful!');
            // Redirect to admin login page
            window.location.href = '/admin/login.html';

        } catch (error) {
            console.error('Installation error:', error);
            alert('Installation error: ' + error.message);
        }
    });
});
