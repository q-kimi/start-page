# Scripts de packaging pour l'extension

## Créer un package ZIP pour Chrome/Edge
# Windows PowerShell
Compress-Archive -Path * -DestinationPath start-page.zip -Force

## Créer un package pour Firefox (XPI)
# Utilisez le même fichier ZIP mais renommez-le en .xpi
# Ou utilisez la commande web-ext (nécessite Node.js et web-ext)
# npm install -g web-ext
# web-ext build

## Liste des fichiers à inclure dans le package
- manifest.json
- index.html
- styles.css
- script.js
- background.js
- icons/icon16.svg
- icons/icon48.svg
- icons/icon128.svg

## Fichiers à EXCLURE
- .git/
- .gitignore
- README.md (optionnel, mais recommandé de l'inclure)
- preview.html
- PACKAGING.md (ce fichier)

## Avant de soumettre
1. Testez l'extension localement
2. Vérifiez que toutes les fonctionnalités marchent
3. Assurez-vous qu'il n'y a pas d'erreurs dans la console
4. Vérifiez la compatibilité sur différents navigateurs
5. Préparez les captures d'écran pour le store
6. Rédigez une description détaillée

## Captures d'écran recommandées
- Vue principale (1280x800)
- Panneau de paramètres
- Différents thèmes
- Gestion des raccourcis

## Icônes promotionnelles
- Chrome Web Store: 440x280 PNG
- Firefox Add-ons: 128x128 PNG minimum
- Bannière: 1400x560 PNG (optionnel)
