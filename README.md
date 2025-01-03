# SupaFlow

SupaFlow est un CMS statique et *serverless* open-source pour la création de landing pages, développé par Ange Kacou Oi ([kacou-oi.com](https://kacou-oi.com)). Il utilise HTMX pour une expérience utilisateur dynamique, Tailwind CSS pour un style moderne et une base de données Supabase pour la gestion du contenu, le tout interrogeable directement depuis le navigateur via l'API Supabase.

## Installation

Suivez ces étapes pour installer et configurer SupaFlow :

1. **Cloner le dépôt GitHub :**
   ```bash
   git clone https://github.com/kacou-oi/supaflow.git
   cd supaflow
   ```

2. **Initialisation de la base de données :**
   Après avoir créé votre projet Supabase, ouvrez l'éditeur SQL de votre projet et exécutez le contenu du fichier `config/database_init.sql` pour initialiser le schéma de la base de données.


## Structure du projet

La structure des fichiers importants est la suivante :

```
admin/
├── create-page.html
├── dashboard.html
├── edit-page.html
├── install.html
├── login.html
└── manage-pages.html
public/
├── index.html
├── _redirects
├── assets/
│   └── doc.txt
├── css/
│   └── style.css
```

*   Le dossier `admin/` contient les fichiers HTML pour l'interface d'administration.
*   Les fichiers HTML publics (`index.html`) sont situés à la racine du dossier `public`.
*   Les feuilles de style CSS sont regroupées dans le dossier `public/css`.
*   Le dossier `public/assets` est disponible pour les autres types de ressources comme les images ou les polices.

## Configuration de Supabase

Pour utiliser SupaFlow, vous devez configurer un projet Supabase :

1. **Créer un projet sur Supabase :**
   Rendez-vous sur [supabase.com](https://supabase.com/) et créez un nouveau projet.

2. **Obtenir les identifiants Supabase :**
   Une fois votre projet créé, accédez aux paramètres de votre projet et récupérez l'URL et la clé API anonyme de votre projet. Vous devrez entrer ces informations dans le fichier `public/js/script.js`.

## Utilisation

Voici comment utiliser SupaFlow pour créer et gérer vos landing pages :

1. **Interface d'administration :**
   Accédez à l'interface d'administration via les fichiers dans le dossier `admin/`. Connectez-vous pour gérer vos pages.

2. **Gérer les pages :**
   Dans le tableau de bord d'administration, vous pouvez créer, modifier et supprimer des pages. La page de gestion des pages (`admin/manage-pages.html`) utilise HTMX pour charger la liste des pages directement depuis Supabase.

3. **Modifier `index.html` :**
   La structure de votre landing page est définie dans le fichier `index.html`. Vous pouvez modifier le contenu de la section `<main>` pour ajouter vos propres éléments.

4. **Utiliser HTMX pour le contenu dynamique :**
   SupaFlow utilise HTMX pour charger du contenu de manière dynamique directement depuis votre base de données Supabase. Vous pouvez ajouter des attributs HTMX à vos éléments HTML pour effectuer des requêtes et mettre à jour le contenu de la page sans rechargement complet.

5. **Styler avec Tailwind CSS :**
   Utilisez les classes utilitaires de Tailwind CSS pour styler vos éléments HTML. Les styles sont définis dans le fichier `public/css/style.css`. La configuration de Tailwind CSS se trouve dans le fichier `tailwind.config.js`.

## Déploiement

Ce projet étant un site statique, vous pouvez le déployer sur diverses plateformes d'hébergement statique. Voici les instructions pour certaines plateformes populaires :

### 1. Cloudflare Pages

Pour déployer sur Cloudflare Pages :

1. Connectez-vous à votre compte Cloudflare et accédez à Cloudflare Pages.
2. Cliquez sur "Créer un projet Page" et sélectionnez "Connecter à un référentiel Git".
3. Choisissez le dépôt GitHub de votre projet SupaFlow.
4. Dans la section "Configurer les builds", utilisez les paramètres par défaut. Cloudflare Pages détectera automatiquement qu'il s'agit d'un site statique.
5. Cliquez sur "Enregistrer et déployer".

### 2. GitHub Pages

Pour déployer sur GitHub Pages :

1. Assurez-vous que votre dépôt GitHub est public.
2. Dans les paramètres de votre dépôt, accédez à la section "Pages".
3. Dans le menu déroulant "Source", choisissez la branche `main` (ou la branche sur laquelle se trouve votre code) et le dossier racine `/ (root)`.
4. Cliquez sur "Enregistrer". Votre site sera disponible à l'adresse `https://<votre_nom_utilisateur>.github.io/<nom_du_dépôt>`.

### 3. Netlify

Pour déployer sur Netlify :

1. Connectez-vous à votre compte Netlify.
2. Cliquez sur "Add new site" puis "Deploy with Git".
3. Sélectionnez GitHub et autorisez Netlify à accéder à vos dépôts.
4. Choisissez le dépôt GitHub de votre projet SupaFlow.
5. Vérifiez les paramètres de build (généralement, Netlify les détecte automatiquement pour les sites statiques).
6. Cliquez sur "Deploy site".

### 4. Vercel

Pour déployer sur Vercel :

1. Connectez-vous à votre compte Vercel.
2. Cliquez sur "Add New..." et sélectionnez "Project".
3. Choisissez le dépôt GitHub de votre projet SupaFlow.
4. Vercel détectera automatiquement qu'il s'agit d'un site statique et configurera le déploiement.
5. Cliquez sur "Deploy".

### 5. cPanel

Pour déployer sur cPanel :

1. Connectez-vous à votre panneau d'administration cPanel.
2. Ouvrez le "Gestionnaire de fichiers".
3. Naviguez jusqu'au dossier racine de votre site web (souvent `public_html`).
4. Téléchargez les fichiers de votre projet SupaFlow dans ce dossier.
5. Assurez-vous que votre configuration DNS pointe vers le répertoire où vous avez téléchargé les fichiers.

## Contribution

Les contributions à SupaFlow sont les bienvenues ! Si vous souhaitez contribuer au projet, veuillez consulter les [guidelines de contribution](CONTRIBUTING.md).

## Licence

SupaFlow est distribué sous la [licence MIT](LICENSE).
