# SupaFlow

SupaFlow est un CMS open-source pour la création de landing pages, développé par Ange Kacou Oi ([kacou-oi.com](https://kacou-oi.com)). Il utilise HTMX pour une expérience utilisateur dynamique, Tailwind CSS pour un style moderne et une base de données Supabase pour la gestion du contenu.

## Installation

Suivez ces étapes pour installer et configurer SupaFlow :

1. **Cloner le dépôt GitHub :**
   ```bash
   git clone https://github.com/votre-nom-utilisateur/supaflow.git
   cd supaflow
   ```

2. **Processus d'installation :**
   Ouvrez le fichier `admin/install.html` dans votre navigateur pour démarrer le processus d'installation. Suivez les instructions à l'écran pour configurer votre projet et créer le compte administrateur initial.

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
└── js/
    └── script.js
```

*   Le dossier `admin/` contient les fichiers HTML pour l'interface d'administration.
*   Les fichiers HTML publics (`index.html`) sont situés à la racine du dossier `public`.
*   Les feuilles de style CSS sont regroupées dans le dossier `public/css`.
*   Les fichiers JavaScript sont regroupés dans le dossier `public/js`.
*   Le dossier `public/assets` est disponible pour les autres types de ressources comme les images ou les polices.

## Configuration de Supabase

Pour utiliser SupaFlow, vous devez configurer un projet Supabase :

1. **Créer un projet sur Supabase :**
   Rendez-vous sur [supabase.com](https://supabase.com/) et créez un nouveau projet.

2. **Obtenir les identifiants Supabase :**
   Une fois votre projet créé, accédez aux paramètres de votre projet et récupérez l'URL et la clé API anonyme de votre projet. Vous devrez entrer ces informations dans le formulaire d'installation.

## Utilisation

Voici comment utiliser SupaFlow pour créer et gérer vos landing pages :

1. **Interface d'administration :**
   Accédez à l'interface d'administration via les fichiers dans le dossier `admin/`. Connectez-vous pour gérer vos pages.

2. **Gérer les pages :**
   Dans le tableau de bord d'administration, vous pouvez créer, modifier et supprimer des pages. La page de gestion des pages (`admin/manage-pages.html`) utilise HTMX pour charger la liste des pages de manière dynamique après avoir cliqué sur le bouton "Charger les Pages".

3. **Modifier `index.html` :**
   La structure de votre landing page est définie dans le fichier `index.html`. Vous pouvez modifier le contenu de la section `<main>` pour ajouter vos propres éléments.

4. **Utiliser HTMX pour le contenu dynamique :**
   SupaFlow utilise HTMX pour charger du contenu de manière dynamique. Vous pouvez ajouter des attributs HTMX à vos éléments HTML pour effectuer des requêtes vers votre base de données Supabase et mettre à jour le contenu de la page sans rechargement complet.

5. **Styler avec Tailwind CSS :**
   Utilisez les classes utilitaires de Tailwind CSS pour styler vos éléments HTML. Les styles sont définis dans le fichier `public/css/style.css`. La configuration de Tailwind CSS se trouve dans le fichier `tailwind.config.js`.

## Déploiement sur Cloudflare Pages

Pour déployer SupaFlow sur Cloudflare Pages, suivez ces étapes :

1. **Assurez-vous que votre code est sur un dépôt GitHub.**
2. **Créez un compte Cloudflare et accédez à la section "Pages".**
3. **Cliquez sur "Créer un projet" et sélectionnez votre dépôt GitHub.**
4. **Dans les paramètres de configuration, assurez-vous que le "Répertoire de sortie" est défini sur `public`.**
5. **Enregistrez et déployez.**

   Pour gérer les redirections et supprimer l'extension `.html` des URLs, un fichier `_redirects` a été ajouté au dossier `public`. Ce fichier contient les règles de redirection pour Cloudflare Pages.

## Contribution

Les contributions à SupaFlow sont les bienvenues ! Si vous souhaitez contribuer au projet, veuillez consulter les [guidelines de contribution](CONTRIBUTING.md).

## Licence

SupaFlow est distribué sous la [licence MIT](LICENSE).
