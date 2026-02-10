// Service worker pour l'extension Chrome
chrome.runtime.onInstalled.addListener(() => {
    console.log('Start Page extension installée avec succès !');
});

// Optionnel : gérer les événements de l'extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getData') {
        // Récupérer des données si nécessaire
        sendResponse({ success: true });
    }
});
