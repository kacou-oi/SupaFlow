# SupaFlow

SupaFlow est une plateforme permettant de gérer et de déployer facilement des landing pages. Elle utilise un frontend statique hébergé sur Cloudflare Pages, un backend serverless avec Cloudflare Workers, et une base de données Supabase.

## Installation

Suivez ces étapes pour installer et configurer SupaFlow :

1. **Clonez le dépôt :**
   ```bash
   git clone <repository_url>
   cd SupaFlow
   ```

2. **Configurez Supabase :**
   - Connectez-vous à votre compte Supabase ou créez-en un.
   - Créez un nouveau projet.
   - Accédez à l'éditeur SQL et exécutez le script contenu dans `config/supabase_init.sql` pour créer les tables nécessaires.

3. **Configurez Cloudflare Workers :**
   - Installez l'interface de ligne de commande `wrangler` : `npm install -g wrangler`.
   - Authentifiez-vous auprès de Cloudflare : `wrangler login`.
   - Naviguez vers le dossier `/workers` : `cd workers`.
   - Déployez le worker : `wrangler deploy`.

4. **Configurez Cloudflare Pages :**
   - Connectez-vous à votre compte Cloudflare ou créez-en un.
   - Créez un nouveau projet Pages et connectez votre dépôt GitHub.
   - Configurez le build :
     - Framework preset : `None`
     - Build command : `Aucune`
     - Build output directory : `public`
   - Alternativement, vous pouvez utiliser le script `deploy-frontend.sh` pour déployer le frontend : `./deploy-frontend.sh`.

## Utilisation

1. **Configuration Initiale :** Après le premier déploiement, accédez à l'URL de votre projet. Vous serez automatiquement redirigé vers la page `/install.html` pour configurer votre projet et créer le compte administrateur principal.

2. **Authentification :**
   - Les administrateurs peuvent s'inscrire via la page `/register`.
   - Les administrateurs peuvent se connecter via la page `/login`.
   - La page `/dashboard` est protégée et nécessite une authentification.

3. **Gestion des templates :**
   - Le tableau de bord permet de visualiser et de gérer les templates de landing pages.
   - Utilisez les boutons "Modifier", "Dupliquer" et "Supprimer" pour interagir avec les templates.

## Exemple d'appel API pour sauvegarder un template

```
POST /api/templates
Content-Type: application/json

{
  "name": "Nom du template",
  "content": "Contenu HTML du template"
}
```

## Mise à jour de l'attribut hx-post

L'attribut `hx-post` des formulaires de connexion, d'inscription et de réinitialisation du mot de passe (`/login`, `/register`, `/reset-password`) est désormais défini dynamiquement via JavaScript. Cela permet de s'assurer que les requêtes sont envoyées à l'URL du Cloudflare Worker configurée.

## Arborescence du projet
```
.gitignore                 # Fichiers ou dossiers à exclure de Git
LICENSE                   # Licence du projet
README.md                 # Documentation du projet
package.json              # Dépendances Node.js
webpack.config.js         # Configuration Webpack pour le build frontend
deploy-frontend.sh        # Script de déploiement du frontend

config/                   # Configuration pour Supabase et autres services
├── supabase_init.sql     # Script pour initialiser la base de données Supabase

functions/                # Cloudflare Pages Functions (Workers JS intégrés)
├── index.js              # Entrée principale pour les routes et API
└── wrangler.toml

public/                   # Fichiers frontend (HTML, CSS, JS, assets)
├── _redirects            # Configuration des redirections (pour Cloudflare Pages)
├── assets/               # Ressources statiques
│   └── style.css         # Fichier CSS principal
├── dashboard.html        # Page du tableau de bord
├── editor.html           # Page de l'éditeur de landing pages
├── install.html          # Page d'installation
├── login.html            # Page de connexion
├── register.html         # Page d'inscription
└── reset-password.html   # Page de réinitialisation du mot de passe

templates/                # Modèles pour les landing pages ou autres fichiers HTML
