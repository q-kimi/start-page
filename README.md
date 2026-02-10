# Start Page - Extension de navigateur 🚀

Une magnifique page de démarrage personnalisable pour votre navigateur avec horloge en temps réel, barre de recherche Google et raccourcis personnalisables.

## ✨ Fonctionnalités

- **Horloge en temps réel** - Affichage de l'heure et de la date
- **Message de salutation personnalisé** - Bonjour, bon après-midi ou bonsoir avec votre nom
- **Barre de recherche intelligente** - Recherche Google ou navigation directe par URL
- **Raccourcis personnalisables** - Accès rapide à vos sites favoris
- **Thèmes multiples** - 5 arrière-plans différents au choix
- **Design moderne** - Interface élégante avec effets de verre (glassmorphism)
- **Responsive** - Fonctionne sur tous les écrans
- **Stockage local** - Vos paramètres sont sauvegardés

## 📦 Installation

### Chrome / Edge / Brave / Opera

1. Téléchargez ou clonez ce projet
2. Ouvrez votre navigateur et accédez à :
   - **Chrome** : `chrome://extensions`
   - **Edge** : `edge://extensions`
   - **Brave** : `brave://extensions`
   - **Opera** : `opera://extensions`

3. Activez le **Mode développeur** (toggle en haut à droite)
4. Cliquez sur **Charger l'extension non empaquetée**
5. Sélectionnez le dossier du projet `start-page`
6. L'extension est installée ! Ouvrez un nouvel onglet pour la voir en action

### Firefox

1. Téléchargez ou clonez ce projet
2. Ouvrez Firefox et accédez à : `about:debugging#/runtime/this-firefox`
3. Cliquez sur **Charger un module complémentaire temporaire**
4. Sélectionnez le fichier `manifest.json` dans le dossier du projet
5. L'extension est installée ! Ouvrez un nouvel onglet

**Note Firefox** : Pour une installation permanente, vous devrez signer l'extension via [addons.mozilla.org](https://addons.mozilla.org/developers/)

## 🎨 Personnalisation

1. Cliquez sur l'icône ⚙️ en bas à droite
2. Configurez :
   - **Votre nom** pour le message de salutation
   - **Arrière-plan** parmi 5 thèmes disponibles
   - **Raccourcis** : ajoutez, modifiez ou supprimez vos favoris
3. Cliquez sur **Enregistrer**

## 🚀 Déploiement en production

### Chrome Web Store

1. Créez un compte développeur sur [Chrome Web Store](https://chrome.google.com/webstore/devconsole/)
2. Préparez les assets requis :
   - Captures d'écran (1280x800 ou 640x400)
   - Icône promotionnelle 440x280
   - Description détaillée
3. Créez un fichier ZIP du dossier du projet
4. Soumettez l'extension pour révision
5. Frais unique de 5$ USD requis

### Firefox Add-ons

1. Créez un compte sur [addons.mozilla.org](https://addons.mozilla.org/developers/)
2. Créez un fichier ZIP du projet
3. Soumettez pour révision
4. Gratuit, pas de frais

### Microsoft Edge Add-ons

1. Créez un compte sur [Microsoft Partner Center](https://partner.microsoft.com/)
2. Suivez les mêmes étapes que Chrome
3. Frais unique de 9$ USD requis

## 📁 Structure du projet

```
start-page/
├── manifest.json          # Configuration de l'extension
├── index.html            # Page principale
├── styles.css            # Styles et thèmes
├── script.js             # Logique JavaScript
├── background.js         # Service worker
├── icons/                # Icônes de l'extension
│   ├── icon16.svg
│   ├── icon48.svg
│   └── icon128.svg
└── README.md            # Ce fichier
```

## 🛠️ Technologies utilisées

- **HTML5** - Structure
- **CSS3** - Design moderne avec glassmorphism
- **JavaScript (Vanilla)** - Logique sans framework
- **Chrome Extension API** - Intégration navigateur
- **LocalStorage** - Sauvegarde des paramètres

## 🔧 Développement

Pour modifier l'extension :

1. Modifiez les fichiers selon vos besoins
2. Rechargez l'extension dans votre navigateur :
   - Chrome : Cliquez sur l'icône de rechargement dans `chrome://extensions`
   - Firefox : Rechargez depuis `about:debugging`
3. Testez les modifications

## 📝 Raccourcis par défaut

- YouTube (🎥)
- Gmail (📧)
- GitHub (💻)
- Twitter (🐦)
- Reddit (🔥)
- Netflix (🎬)

## 🎯 Thèmes disponibles

1. **Gradient Bleu** - Violet et bleu (par défaut)
2. **Gradient Violet** - Rose et rouge
3. **Gradient Rose** - Bleu clair et cyan
4. **Gradient Sombre** - Noir et gris
5. **Couleur unie** - Gris foncé

## 🐛 Dépannage

**L'extension ne s'affiche pas :**
- Vérifiez que le mode développeur est activé
- Assurez-vous que tous les fichiers sont présents
- Consultez la console pour les erreurs

**Les paramètres ne se sauvegardent pas :**
- Vérifiez que le stockage local est activé dans votre navigateur
- Assurez-vous que vous n'êtes pas en mode navigation privée

**Problèmes de recherche :**
- Vérifiez votre connexion Internet
- Assurez-vous que JavaScript est activé

## 📄 Licence

Ce projet est libre d'utilisation. Vous pouvez le modifier et le distribuer librement.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Améliorer le code

## 📧 Support

Pour toute question ou problème, créez une issue dans le dépôt du projet.

---

**Profitez de votre nouvelle page de démarrage ! 🎉**
