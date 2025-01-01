#!/bin/bash

# Déploiement du contenu du dossier public vers Cloudflare Pages
echo "Déploiement du frontend vers Cloudflare Pages..."
cd public
npx wrangler pages deploy ./

echo "Le frontend a été déployé avec succès sur Cloudflare Pages."
echo "Pensez à configurer les redirections d'URL dans un fichier _redirects dans le dossier /public."
