// functions/api/utils.js
// Fonctions utilitaires (par ex., validation, logs)

export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function logMessage(message) {
  console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
}
