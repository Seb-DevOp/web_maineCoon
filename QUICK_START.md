# 🚀 Guide de Démarrage Rapide

## ✅ Ce qui a été créé

Votre site web MAINE COON est maintenant prêt avec :

- ✅ Design professionnel doré et noir
- ✅ Support multilingue (Anglais, Français, Espagnol, Chinois)
- ✅ Mode sombre / Mode clair
- ✅ Affichage des statistiques crypto
- ✅ Graphique de prix (données de démonstration)
- ✅ Responsive design
- ✅ Configuration pour Vercel

## 📦 Installation

```bash
cd web_maineCoon
npm install
```

## 🛠️ Lancer en Local

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🌐 Déploiement sur Vercel

### Méthode Simple (Recommandée)

1. **Créez un repository GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git
   git push -u origin main
   ```

2. **Connectez Vercel à GitHub** :
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Add New Project"
   - Importez votre repository GitHub
   - Vercel détectera automatiquement Next.js
   - Cliquez sur "Deploy"

3. **C'est tout !** 🎉
   - Vercel déploiera automatiquement votre site
   - À chaque push sur GitHub, le site se mettra à jour automatiquement

📖 **Guide détaillé** : Voir `DEPLOYMENT.md`

## 📊 Intégrer les Données Réelles

Actuellement, le site affiche des données de démonstration. Pour afficher les vraies données :

1. **Option simple** : Utiliser DEXScreener (gratuit, pas d'API key)
2. **Modifier** : `components/Stats.tsx` et `components/PriceChart.tsx`
3. **Suivre** : Le guide dans `API_INTEGRATION.md`

## 🎨 Personnalisation

- **Couleurs** : Modifiez `tailwind.config.ts`
- **Traductions** : Modifiez les fichiers dans `messages/`
- **Contenu** : Modifiez les composants dans `components/`

## 📁 Structure du Projet

```
web_maineCoon/
├── app/              # Pages Next.js
├── components/       # Composants React
├── messages/         # Traductions
├── public/           # Images (logo.png, banniere.png)
└── ...
```

## 🐛 Problèmes Courants

### Les images ne s'affichent pas
- Vérifiez que les images sont dans `public/`
- Utilisez `/logo.png` et non `./logo.png`

### Erreur de build
- Vérifiez que toutes les dépendances sont installées : `npm install`
- Vérifiez la version de Node.js (20.x recommandé)

### Les traductions ne fonctionnent pas
- Vérifiez que tous les fichiers dans `messages/` existent
- Vérifiez l'URL : elle doit commencer par `/en`, `/fr`, `/es`, ou `/zh`

## 📚 Documentation

- `README.md` - Documentation générale
- `DEPLOYMENT.md` - Guide de déploiement détaillé
- `API_INTEGRATION.md` - Guide pour intégrer les données réelles

## 🎯 Prochaines Étapes

1. ✅ Installer les dépendances : `npm install`
2. ✅ Tester en local : `npm run dev`
3. ✅ Créer le repository GitHub
4. ✅ Déployer sur Vercel
5. ✅ (Optionnel) Intégrer les données réelles de la crypto

## 💡 Astuces

- Le site est en anglais par défaut, mais change automatiquement selon la langue du navigateur
- Le mode sombre est activé par défaut
- Les images sont déjà dans `public/` et prêtes à être utilisées
- Vercel offre un déploiement gratuit avec HTTPS automatique

## 🆘 Besoin d'Aide ?

Consultez les fichiers de documentation :
- `README.md` pour la documentation générale
- `DEPLOYMENT.md` pour le déploiement
- `API_INTEGRATION.md` pour les données réelles

---

**Bon déploiement ! 🚀**
