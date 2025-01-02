// functions/api/pages.js
// Gestion des landing pages (CRUD)

export async function onRequestGet(context) {
  // Récupérer la liste des landing pages (à implémenter)
  return new Response(JSON.stringify([{ id: 1, name: 'Page d\'accueil' }]), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function onRequestPost(context) {
  // Créer une nouvelle landing page (à implémenter)
  return new Response('Landing page créée', { status: 201 });
}

export async function onRequestPut(context) {
  // Mettre à jour une landing page existante (à implémenter)
  return new Response('Landing page mise à jour', { status: 200 });
}

export async function onRequestDelete(context) {
  // Supprimer une landing page (à implémenter)
  return new Response('Landing page supprimée', { status: 200 });
}
