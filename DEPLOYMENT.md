# Guide de Déploiement sur Vercel

Ce guide vous explique comment déployer le site MAINE COON sur Vercel avec déploiement automatique depuis GitHub.

## 📋 Prérequis

1. Un compte GitHub
2. Un compte Vercel (gratuit)
3. Node.js installé localement (pour le développement)

## 🚀 Étapes de Déploiement

### 1. Créer un Repository GitHub

1. Allez sur [GitHub](https://github.com) et créez un nouveau repository
2. Nommez-le par exemple : `maine-coon-website`
3. Ne cochez **PAS** "Initialize this repository with a README" (vous avez déjà un README)
4. Cliquez sur "Create repository"

### 2. Initialiser Git et Pousser le Code

Dans le terminal, depuis le dossier `web_maineCoon` :

```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - MAINE COON website"

# Ajouter le remote GitHub (remplacez YOUR_USERNAME et YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Pousser vers GitHub
git branch -M main
git push -u origin main
```

### 3. Connecter Vercel à GitHub

1. Allez sur [Vercel](https://vercel.com) et connectez-vous
2. Cliquez sur "Add New..." → "Project"
3. Cliquez sur "Import Git Repository"
4. Autorisez Vercel à accéder à votre compte GitHub si nécessaire
5. Sélectionnez votre repository `maine-coon-website`

### 4. Configurer le Projet sur Vercel

Vercel détectera automatiquement Next.js. Les paramètres par défaut devraient être :

- **Framework Preset** : Next.js
- **Root Directory** : `./` (ou laissez vide)
- **Build Command** : `npm run build` (automatique)
- **Output Directory** : `.next` (automatique)
- **Install Command** : `npm install` (automatique)

### 5. Variables d'Environnement (Optionnel)

Si vous ajoutez des API keys plus tard, vous pouvez les ajouter dans :
- Settings → Environment Variables

### 6. Déployer

1. Cliquez sur "Deploy"
2. Attendez quelques minutes que Vercel construise et déploie votre site
3. Une fois terminé, vous obtiendrez une URL comme : `https://maine-coon-website.vercel.app`

### 7. Déploiement Automatique

✅ **C'est déjà configuré !** 

À chaque fois que vous pousserez du code sur la branche `main` de GitHub, Vercel déploiera automatiquement la nouvelle version :

```bash
# Faire des modifications
# ...

# Commiter et pousser
git add .
git commit -m "Description des modifications"
git push origin main

# Vercel déploiera automatiquement ! 🎉
```

## 🔧 Configuration Avancée

### Domaine Personnalisé

1. Allez dans votre projet Vercel → Settings → Domains
2. Ajoutez votre domaine personnalisé
3. Suivez les instructions pour configurer les DNS

### Variables d'Environnement

Si vous ajoutez des API keys (pour CoinGecko, DEXScreener, etc.) :

1. Allez dans Settings → Environment Variables
2. Ajoutez vos variables :
   - `COINGECKO_API_KEY` (si nécessaire)
   - `DEXSCREENER_API_KEY` (si nécessaire)
   - etc.

### Prévisualisation des Pull Requests

Vercel créera automatiquement une prévisualisation pour chaque Pull Request sur GitHub, permettant de tester les changements avant de les merger.

## 📝 Notes Importantes

- Le fichier `.github/workflows/deploy.yml` est optionnel si vous utilisez l'intégration GitHub de Vercel directement
- Vercel détecte automatiquement Next.js et configure tout pour vous
- Les déploiements sont gratuits sur le plan gratuit de Vercel
- Vous pouvez avoir plusieurs environnements : Production, Preview, Development

## 🐛 Dépannage

### Le build échoue

1. Vérifiez les logs dans Vercel → Deployments → [votre déploiement] → Build Logs
2. Assurez-vous que toutes les dépendances sont dans `package.json`
3. Vérifiez que Node.js version est compatible (20.x recommandé)

### Les images ne s'affichent pas

1. Vérifiez que les images sont dans le dossier `public/`
2. Utilisez des chemins relatifs depuis `/` : `/logo.png` et non `./logo.png`

### Les traductions ne fonctionnent pas

1. Vérifiez que tous les fichiers dans `messages/` sont présents
2. Vérifiez la configuration dans `i18n.ts` et `middleware.ts`

## ✅ Checklist de Déploiement

- [ ] Code poussé sur GitHub
- [ ] Projet créé sur Vercel
- [ ] Repository connecté
- [ ] Premier déploiement réussi
- [ ] Site accessible via l'URL Vercel
- [ ] Test du changement de langue
- [ ] Test du dark/light mode
- [ ] Vérification sur mobile (responsive)

## 🎉 C'est Prêt !

Votre site est maintenant en ligne et se mettra à jour automatiquement à chaque push sur GitHub !
