# Script de test et packaging pour Start Page
# Exécuter avec PowerShell

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Start Page - Utilitaires" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Menu
Write-Host "Choisissez une action:" -ForegroundColor Yellow
Write-Host "1. Ouvrir la page de preview dans le navigateur par défaut"
Write-Host "2. Créer un package ZIP pour déploiement"
Write-Host "3. Vérifier les fichiers du projet"
Write-Host "4. Quitter"
Write-Host ""

$choice = Read-Host "Votre choix (1-4)"

switch ($choice) {
    "1" {
        Write-Host "`nOuverture de la page de preview..." -ForegroundColor Green
        Start-Process "preview.html"
    }
    "2" {
        Write-Host "`nCréation du package ZIP..." -ForegroundColor Green
        
        # Fichiers à inclure
        $files = @(
            "manifest.json",
            "index.html",
            "styles.css",
            "script.js",
            "background.js",
            "icons",
            "README.md",
            "LICENSE"
        )
        
        # Supprimer l'ancien ZIP s'il existe
        if (Test-Path "start-page.zip") {
            Remove-Item "start-page.zip"
            Write-Host "Ancien package supprimé" -ForegroundColor Yellow
        }
        
        # Créer le nouveau ZIP
        Compress-Archive -Path $files -DestinationPath "start-page.zip" -Force
        
        Write-Host "✓ Package créé: start-page.zip" -ForegroundColor Green
        Write-Host "  Taille: $((Get-Item start-page.zip).Length / 1KB) KB" -ForegroundColor Cyan
    }
    "3" {
        Write-Host "`nVérification des fichiers..." -ForegroundColor Green
        Write-Host ""
        
        $requiredFiles = @(
            "manifest.json",
            "index.html",
            "styles.css",
            "script.js",
            "background.js",
            "README.md",
            "icons\icon16.svg",
            "icons\icon48.svg",
            "icons\icon128.svg"
        )
        
        $allPresent = $true
        foreach ($file in $requiredFiles) {
            if (Test-Path $file) {
                Write-Host "✓ $file" -ForegroundColor Green
            } else {
                Write-Host "✗ $file MANQUANT" -ForegroundColor Red
                $allPresent = $false
            }
        }
        
        Write-Host ""
        if ($allPresent) {
            Write-Host "Tous les fichiers requis sont présents!" -ForegroundColor Green
        } else {
            Write-Host "Certains fichiers sont manquants!" -ForegroundColor Red
        }
    }
    "4" {
        Write-Host "`nAu revoir!" -ForegroundColor Cyan
        exit
    }
    default {
        Write-Host "`nChoix invalide!" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Appuyez sur une touche pour continuer..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
