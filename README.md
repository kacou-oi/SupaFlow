# SupaFlow

SupaFlow est un CMS open-source pour la création de landing pages, développé par Ange Kacou Oi ([kacou-oi.com](https://kacou-oi.com)). Il utilise HTMX pour une expérience utilisateur dynamique, Tailwind CSS pour un style moderne et une base de données Supabase pour la gestion du contenu.

## Installation

Suivez ces étapes pour installer et configurer SupaFlow :

1. **Cloner le dépôt GitHub :**
   ```bash
   git clone https://github.com/votre-nom-utilisateur/supaflow.git
   cd supaflow
   ```

2. **Configurer les variables d'environnement :**
   - Copiez le fichier `example.env` vers `.env` :
     ```bash
     cp example.env .env
     ```
   - Ouvrez le fichier `.env` et remplacez les valeurs d'espace réservé par vos identifiants Supabase :
     ```
     SUPABASE_URL=VOTRE_URL_SUPABASE
     SUPABASE_API_KEY=VOTRE_CLE_API_SUPABASE
     ```

3. **Ouvrir `index.html` dans votre navigateur :**
   Comme SupaFlow est conçu pour un hébergement statique, ouvrez simplement le fichier `index.html` dans votre navigateur web.

## Utilisation

Voici comment utiliser SupaFlow pour créer et gérer vos landing pages :

1. **Modifier `index.html` :**
   La structure de votre landing page est définie dans le fichier `index.html`. Vous pouvez modifier le contenu de la section `<main>` pour ajouter vos propres éléments.

2. **Utiliser HTMX pour le contenu dynamique :**
   SupaFlow utilise HTMX pour charger du contenu de manière dynamique. Vous pouvez ajouter des attributs HTMX à vos éléments HTML pour effectuer des requêtes vers votre base de données Supabase et mettre à jour le contenu de la page sans rechargement complet.

3. **Styler avec Tailwind CSS :**
   Utilisez les classes utilitaires de Tailwind CSS pour styler vos éléments HTML. Le fichier `output.css` contient tous les styles nécessaires.

## Contribution

Les contributions à SupaFlow sont les bienvenues ! Si vous souhaitez contribuer au projet, veuillez consulter les [guidelines de contribution](CONTRIBUTING.md).

## Licence

SupaFlow est distribué sous la [licence MIT](LICENSE).
