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

3. **Processus d'installation :**
   Ouvrez le fichier `public/install.html` dans votre navigateur pour démarrer le processus d'installation. Suivez les instructions à l'écran pour configurer votre projet, connecter Supabase et créer le compte administrateur initial.

4. **Configuration manuelle additionnelle :**
   - **Mise à jour du fichier `.env` :** Après avoir utilisé le formulaire d'installation, ouvrez le fichier `config/.env` et assurez-vous que les valeurs de `SUPABASE_URL` et `SUPABASE_API_KEY` correspondent à vos informations Supabase.
   - **Initialisation de la base de données :** Exécutez le script SQL contenu dans `config/database_init.sql` sur votre base de données Supabase. Vous pouvez le faire en utilisant l'éditeur SQL de Supabase ou en utilisant la CLI Supabase avec la commande : `supabase db reset -- --file "config/database_init.sql"`
   - **Installation des données d'exemple (optionnel) :** Si vous souhaitez installer des données d'exemple, exécutez le script `config/sample_data.sql` sur votre base de données Supabase après l'initialisation.

## Configuration de Supabase

Pour utiliser SupaFlow, vous devez configurer un projet Supabase :

1. **Créer un projet sur Supabase :**
   Rendez-vous sur [supabase.com](https://supabase.com/) et créez un nouveau projet.

2. **Obtenir les identifiants Supabase :**
   Une fois votre projet créé, accédez aux paramètres de votre projet et récupérez l'URL et la clé API de votre projet.

3. **Mettre à jour le fichier `.env` :**
   Remplacez les valeurs d'espace réservé dans le fichier `.env` par l'URL et la clé API de votre projet Supabase.

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
