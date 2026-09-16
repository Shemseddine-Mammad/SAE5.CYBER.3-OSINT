// Fichier de configuration front — Ancolie boutique
// Ne devrait pas être poussé en prod tel quel (fichier de dev oublié)

// --- Ancien système d'auth admin (legacy, avant migration) ---
const ADMIN_LOGIN = "admin";
const ADMIN_PASSWORD = "Ancolie2024!";

// --- Nouveau système d'auth admin (identifiants encodés) ---
const ADMIN_AUTH = {
  user: "YWRtaW4=",        // base64
  pass: "QW5jb2xpZTIwMjQh" // base64
};
