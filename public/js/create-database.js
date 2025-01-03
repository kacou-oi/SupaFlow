import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener('DOMContentLoaded', () => {
    const installForm = document.getElementById('installForm');
    installForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(installForm);
        const projectName = formData.get('projectName');
        const adminEmail = formData.get('adminEmail');
        const adminPassword = formData.get('adminPassword');
        const installSampleData = formData.get('installSampleData');

        try {
            // 1. Initialize database schema
            console.log('1. Initializing database schema...');
            const databaseInitSql = `
                CREATE TABLE IF NOT EXISTS users (
                    id SERIAL PRIMARY KEY,
                    email VARCHAR(255) UNIQUE NOT NULL,
                    password VARCHAR(255) NOT NULL,
                    nom VARCHAR(255),
                    prenom VARCHAR(255),
                    role VARCHAR(255),
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP WITH TIME ZONE
                );

                CREATE TABLE IF NOT EXISTS articles (
                    id SERIAL PRIMARY KEY,
                    titre VARCHAR(255) NOT NULL,
                    slug VARCHAR(255) UNIQUE NOT NULL,
                    contenu TEXT,
                    auteur_id INT REFERENCES users(id),
                    date_publication TIMESTAMP WITH TIME ZONE,
                    est_publie BOOLEAN DEFAULT FALSE,
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP WITH TIME ZONE
                );

                CREATE TABLE IF NOT EXISTS categories (
                    id SERIAL PRIMARY KEY,
                    nom VARCHAR(255) UNIQUE NOT NULL,
                    slug VARCHAR(255) UNIQUE NOT NULL,
                    description TEXT
                );

                CREATE TABLE IF NOT EXISTS tags (
                    id SERIAL PRIMARY KEY,
                    nom VARCHAR(255) UNIQUE NOT NULL,
                    slug VARCHAR(255) UNIQUE NOT NULL
                );

                CREATE TABLE IF NOT EXISTS article_categories (
                    article_id INT REFERENCES articles(id),
                    categorie_id INT REFERENCES categories(id),
                    PRIMARY KEY (article_id, categorie_id)
                );

                CREATE TABLE IF NOT EXISTS article_tags (
                    article_id INT REFERENCES articles(id),
                    tag_id INT REFERENCES tags(id),
                    PRIMARY KEY (article_id, tag_id)
                );
            `;
            const { error: databaseError } = await supabase.sql(databaseInitSql);

            if (databaseError) {
                console.error('Error initializing database schema:', databaseError);
                alert('Error initializing database schema: ' + databaseError.message);
                return;
            }
            console.log('Database schema initialized successfully.');

            // Create admin user
            console.log('Creating admin user...');
            const { data: { user }, error: userError } = await supabase.auth.signUp({
                email: adminEmail,
                password: adminPassword,
            });

            if (userError) {
                alert('Error creating admin user: ' + userError.message);
                return;
            }
            console.log('Admin user created successfully.');

            // 3. Install sample data
            if (installSampleData) {
                console.log('3. Installing sample data...');
                const sampleDataSql = `
                    -- Insert sample data into the users table
                    INSERT INTO users (email, password) VALUES
                    ('sample.user1@example.com', 'password123'),
                    ('sample.user2@example.com', 'password456');

                    -- Insert sample data into the categories table
                    INSERT INTO categories (nom, slug) VALUES
                    ('Technology', 'technology'),
                    ('Travel', 'travel'),
                    ('Food', 'food');

                    -- Insert sample data into the articles (titre, slug, contenu, auteur_id) table
                    INSERT INTO articles (titre, slug, contenu, auteur_id) VALUES
                    ('First Sample Article', 'first-sample-article', 'This is the content of the first sample article.', 1),
                    ('Second Sample Article', 'second-sample-article', 'This is the content of the second sample article.', 2),
                    ('A Trip to Remember', 'a-trip-to-remember', 'Just got back from an amazing trip!', 1);

                     -- Insert sample data into the article_categories table
                    INSERT INTO article_categories (article_id, categorie_id) VALUES
                    (1, 1),
                    (2, 3),
                    (3, 2);

                    -- Insert sample data into the article_tags table
                    INSERT INTO article_tags (article_id, tag_id) VALUES
                    (1, 1),
                    (2, 2),
                    (3, 3);
                `;
                const { error: sampleDataError } = await supabase.sql(sampleDataSql);

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
