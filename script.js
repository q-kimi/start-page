// Constantes et icônes SVG
const ICONS = {
    mail: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>',
    github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>',
    reddit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.68 13.5c-.08.58-.25 1.13-.49 1.64-.74 1.57-2.38 2.69-4.19 2.69s-3.45-1.12-4.19-2.69c-.24-.51-.41-1.06-.49-1.64-.02-.14.08-.26.22-.26h8.92c.14 0 .24.12.22.26zM9.5 10.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm3 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z"/></svg>',
    twitter: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    youtube: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    netflix: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z"/></svg>',
    google: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>',
    globe: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
};

const DEFAULT_SHORTCUTS = [
    { name: 'Mail', url: 'https://gmail.com', icon: 'mail' },
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'Reddit', url: 'https://reddit.com', icon: 'reddit' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' }
];

// État de l'application
let settings = {
    name: 'Anthony',
    city: 'Paris',
    shortcuts: DEFAULT_SHORTCUTS
};

// Éléments DOM
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const greetingElement = document.getElementById('greeting');
const weatherTempElement = document.getElementById('weather-temp');
const weatherDescElement = document.getElementById('weather-desc');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const shortcutsContainer = document.getElementById('shortcuts');
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const closeModal = document.getElementById('close-modal');
const nameInput = document.getElementById('name-input');
const cityInput = document.getElementById('city-input');
const saveSettings = document.getElementById('save-settings');
const addShortcutBtn = document.getElementById('add-shortcut');
const shortcutsManager = document.getElementById('shortcuts-manager');

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    updateTime();
    updateDate();
    updateGreeting();
    updateWeather();
    renderShortcuts();
    
    // Mise à jour de l'horloge chaque seconde
    setInterval(updateTime, 1000);
    
    // Mise à jour de la météo toutes les 30 minutes
    setInterval(updateWeather, 1800000);
    
    // Événements
    searchForm.addEventListener('submit', handleSearch);
    settingsBtn.addEventListener('click', openSettings);
    closeModal.addEventListener('click', closeSettingsModal);
    saveSettings.addEventListener('click', handleSaveSettings);
    addShortcutBtn.addEventListener('click', addShortcutField);
    
    // Fermer le modal en cliquant à l'extérieur
    settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) {
            closeSettingsModal();
        }
    });
});

// Gestion du temps
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
}

function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const dateStr = now.toLocaleDateString('fr-FR', options);
    dateElement.textContent = dateStr;
}

// Message de salutation
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = 'Bonjour';
    
    if (hour < 12) {
        greeting = 'Bonjour';
    } else if (hour < 18) {
        greeting = 'Bon après-midi';
    } else {
        greeting = 'Bonsoir';
    }
    
    if (settings.name) {
        greetingElement.innerHTML = `${greeting}, <span class="name">${settings.name}</span>`;
    } else {
        greetingElement.textContent = greeting;
    }
}


// Météo
async function updateWeather() {
    try {
        // Simulation météo (en production, utilisez une vraie API comme OpenWeatherMap)
        const weatherConditions = ['Ensoleillé', 'Nuageux', 'Couvert', 'Pluvieux'];
        const temp = Math.floor(Math.random() * 20) + 5; // 5-25°C
        const condition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
        
        weatherTempElement.textContent = `${temp}°C`;
        weatherDescElement.textContent = condition;
        
        // Vous pouvez utiliser cette fonction avec une vraie API :
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${settings.city}&units=metric&lang=fr&appid=YOUR_API_KEY`);
        // const data = await response.json();
        // weatherTempElement.textContent = `${Math.round(data.main.temp)}°C`;
        // weatherDescElement.textContent = data.weather[0].description;
    } catch (error) {
        console.error('Erreur lors de la récupération de la météo:', error);
        weatherTempElement.textContent = '--°C';
        weatherDescElement.textContent = 'Non disponible';
    }
}

// Recherche
function handleSearch(e) {
    e.preventDefault();
    const query = searchInput.value.trim();
    
    if (!query) return;
    
    // Vérifier si c'est une URL
    const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/.*)?$/;
    
    if (urlPattern.test(query)) {
        // Ajouter https:// si nécessaire
        const url = query.startsWith('http') ? query : `https://${query}`;
        window.location.href = url;
    } else {
        // Recherche Google
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

// Raccourcis
function renderShortcuts() {
    shortcutsContainer.innerHTML = '';
    
    settings.shortcuts.forEach(shortcut => {
        const link = document.createElement('a');
        link.href = shortcut.url;
        link.className = 'shortcut';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        const iconSvg = ICONS[shortcut.icon] || ICONS.globe;
        
        link.innerHTML = `
            <div class="shortcut-icon">${iconSvg}</div>
            <div class="shortcut-name">${shortcut.name}</div>
        `;
        
        shortcutsContainer.appendChild(link);
    });
}

// Paramètres
function openSettings() {
    settingsModal.classList.add('active');
    nameInput.value = settings.name;
    cityInput.value = settings.city;
    renderShortcutsManager();
}

function closeSettingsModal() {
    settingsModal.classList.remove('active');
}

function renderShortcutsManager() {
    shortcutsManager.innerHTML = '';
    
    settings.shortcuts.forEach((shortcut, index) => {
        const div = document.createElement('div');
        div.className = 'shortcut-edit';
        div.innerHTML = `
            <input type="text" value="${shortcut.name}" data-index="${index}" data-field="name" placeholder="Nom">
            <input type="text" value="${shortcut.icon}" data-index="${index}" data-field="icon" placeholder="Icon (mail, github, etc.)">
            <input type="text" value="${shortcut.url}" data-index="${index}" data-field="url" placeholder="URL">
            <button class="delete-shortcut" data-index="${index}">×</button>
        `;
        shortcutsManager.appendChild(div);
    });
    
    // Événements pour les inputs et boutons de suppression
    shortcutsManager.querySelectorAll('input').forEach(input => {
        input.addEventListener('change', updateShortcutField);
    });
    
    shortcutsManager.querySelectorAll('.delete-shortcut').forEach(btn => {
        btn.addEventListener('click', deleteShortcut);
    });
}

function updateShortcutField(e) {
    const index = parseInt(e.target.dataset.index);
    const field = e.target.dataset.field;
    settings.shortcuts[index][field] = e.target.value;
}

function deleteShortcut(e) {
    const index = parseInt(e.target.dataset.index);
    settings.shortcuts.splice(index, 1);
    renderShortcutsManager();
}

function addShortcutField() {
    settings.shortcuts.push({ name: 'Nouveau', url: 'https://exemple.com', icon: 'globe' });
    renderShortcutsManager();
}

function handleSaveSettings() {
    settings.name = nameInput.value;
    settings.city = cityInput.value;
    
    saveSettings_toStorage();
    applySettings();
    closeSettingsModal();
}

// Stockage
function loadSettings() {
    try {
        const stored = localStorage.getItem('startPageSettings');
        if (stored) {
            const parsed = JSON.parse(stored);
            settings = { ...settings, ...parsed };
        }
    } catch (error) {
        console.error('Erreur lors du chargement des paramètres:', error);
    }
    
    applySettings();
}

function saveSettings_toStorage() {
    try {
        localStorage.setItem('startPageSettings', JSON.stringify(settings));
    } catch (error) {
        console.error('Erreur lors de la sauvegarde des paramètres:', error);
    }
}

function applySettings() {
    // Mettre à jour le message de salutation
    updateGreeting();
    updateDate();
    updateWeather();
    
    // Rafraîchir les raccourcis
    renderShortcuts();
}

