Fonctionnalités

- Horloge et date.
- Message de salutation (Bonjour / Bon après-midi / Bonsoir) avec nom d'utilisateur personalisable.
- Barre de recherche avec détection d'URL et recherche via moteurs configurables (Google, Bing, Brave, Ecosia).
- Sélection et persistance du moteur de recherche (stockage dans `localStorage`).
- Raccourcis (liens rapides) : ajout, modification, suppression et réorganisation via l'interface.
- Météo locale récupérée via Open-Meteo (nécessite autorisation de géolocalisation).
- Stockage local des préférences (`localStorage`).
- Fenêtres modales pour la gestion du profil et des raccourcis, interface responsive et animations CSS.
- Serveur optionnel simple (fichier `server.js`) pour servir les fichiers en local via Express.


Fichiers clés

- `index.html` — page principale (HTML + script intégré)
- `styles.css` — styles et thèmes
- `script.js` — logique JS alternative / utilitaires
- `server.js` — serveur Express optionnel
- `manifest.json` — métadonnées (si utilisation en extension)
- `LICENSE` — licence du projet