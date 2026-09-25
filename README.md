# ARIS IPTV — première version

## Déploiement GitHub + Render

1. Crée un dépôt GitHub, par exemple `ARIS-IPTV-WEB`.
2. Mets à la racine :
   - `index.html`
   - `style.css`
   - `script.js`
   - `admin.html`
   - `assets/`
3. Sur Render : **New → Static Site**.
4. Connecte le dépôt GitHub.
5. Build command : laisser vide.
6. Publish directory : `.`
7. Déploie.

## WhatsApp
Le numéro configuré est `+213 777 400 102`.
Modifie `CONFIG.whatsapp` dans `script.js` si nécessaire.

## Backend
Le site contient déjà `apiBaseUrl: "https://aris-iptv.onrender.com"`.
Les appels API ne sont volontairement pas inventés : les routes exactes de ton backend doivent être branchées lorsque tu veux synchroniser clients, codes et appareils.

## Administration
`admin.html` est un prototype local avec `localStorage`. Il n'est pas sécurisé pour une vraie administration en production. Pour la version production, il faut connecter l'authentification et les données à ton backend.

## Important
N'utilise le site que pour des contenus/services dont tu disposes des droits ou autorisations nécessaires.
