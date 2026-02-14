
# Start Page

Description

Start Page est une page d'accueil locale et personnalisable qui fournit une interface claire pour démarrer le navigateur.

Fonctionnalités

- Horloge et date en temps réel.
- Message de salutation personnalisable (Bonjour / Bon après-midi / Bonsoir) avec prénom sauvegardé.
- Barre de recherche avec détection d'URL et recherche via moteurs configurables (Google, Bing, Brave, Ecosia).
- Sélection et persistance du moteur de recherche (stockage dans `localStorage`).
- Raccourcis (liens rapides) : ajout, modification, suppression et réorganisation via l'interface.
- Météo locale récupérée via Open-Meteo (nécessite autorisation de géolocalisation).
- Stockage local des préférences (`localStorage`).
- Fenêtres modales pour la gestion du profil et des raccourcis, interface responsive et animations CSS.
- Serveur optionnel simple (fichier `server.js`) pour servir les fichiers en local via Express.

Installation et exécution

1. Ouvrir `index.html` directement dans un navigateur (usage local simple).
2. Optionnel : lancer le serveur Node.js pour servir les fichiers :

```bash
npm install
npm start
# puis ouvrir http://localhost
```

Fichiers clés

- `index.html` — page principale (HTML + script intégré)
- `styles.css` — styles et thèmes
- `script.js` — logique JS alternative / utilitaires
- `server.js` — serveur Express optionnel
- `manifest.json` — métadonnées (si utilisation en extension)
- `LICENSE` — licence du projet

Licence

Consulter le fichier `LICENSE` pour les informations de licence.



