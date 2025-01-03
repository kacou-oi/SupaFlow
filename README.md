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
   Ouvrez le fichier `public/install.html` dans votre navigateur pour démarrer le processus d'installation. Suivez les instructions à l'écran pour configurer votre projet, fournir vos identifiants Supabase et créer le compte administrateur initial. Les identifiants Supabase seront automatiquement enregistrés dans un fichier `.env` à la racine du projet.

## Structure du projet

La structure des fichiers importants est la suivante :

```
public/
├── index.html
├── install.html
├── assets/
├── css/
│   └── style.css
└── js/
    └── script.js
```

*   Les fichiers HTML (`index.html`, `install.html`) sont situés à la racine du dossier `public`.
*   Les feuilles de style CSS sont regroupées dans le dossier `public/css`.
*   Les fichiers JavaScript sont regroupés dans le dossier `public/js`.
*   Le dossier `public/assets` est disponible pour les autres types de ressources comme les images ou les polices.

## Configuration de Supabase

Pour utiliser SupaFlow, vous devez configurer un projet Supabase :

1. **Créer un projet sur Supabase :**
   Rendez-vous sur [supabase.com](https://supabase.com/) et créez un nouveau projet.

2. **Obtenir les identifiants Supabase :**
   Une fois votre projet créé, accédez aux paramètres de votre projet et récupérez l'URL et la clé API de votre projet. Ces informations vous seront demandées lors du processus d'installation.

## Utilisation

Voici comment utiliser SupaFlow pour créer et gérer vos landing pages :

1. **Modifier `index.html` :**
   La structure de votre landing page est définie dans le fichier `index.html`. Vous pouvez modifier le contenu de la section `<main>` pour ajouter vos propres éléments.

2. **Utiliser HTMX pour le contenu dynamique :**
   SupaFlow utilise HTMX pour charger du contenu de manière dynamique. Vous pouvez ajouter des attributs HTMX à vos éléments HTML pour effectuer des requêtes vers votre base de données Supabase et mettre à jour le contenu de la page sans rechargement complet.

3. **Styler avec Tailwind CSS :**
   Utilisez les classes utilitaires de Tailwind CSS pour styler vos éléments HTML. Les styles sont définis dans le fichier `public/css/style.css`.

## Déploiement sur Cloudflare Pages

Pour déployer SupaFlow sur Cloudflare Pages, suivez ces étapes :

1. **Assurez-vous que votre code est sur un dépôt GitHub.**
2. **Créez un compte Cloudflare et accédez à la section "Pages".**
3. **Cliquez sur "Créer un projet" et sélectionnez votre dépôt GitHub.**
4. **Dans les paramètres de configuration, assurez-vous que le "Répertoire de sortie" est défini sur `public`.**
5. **Enregistrez et déployez.**

## Contribution

Les contributions à SupaFlow sont les bienvenues ! Si vous souhaitez contribuer au projet, veuillez consulter les [guidelines de contribution](CONTRIBUTING.md).

## Licence

SupaFlow est distribué sous la [licence MIT](LICENSE).
