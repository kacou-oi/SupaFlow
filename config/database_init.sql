CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    role VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE articles (
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

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) UNIQUE NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) UNIQUE NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE article_categories (
    article_id INT REFERENCES articles(id),
    categorie_id INT REFERENCES categories(id),
    PRIMARY KEY (article_id, categorie_id)
);

CREATE TABLE article_tags (
    article_id INT REFERENCES articles(id),
    tag_id INT REFERENCES tags(id),
    PRIMARY KEY (article_id, tag_id)
);
