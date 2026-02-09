# MAINE COON (MCN) - Site Web Officiel

Site web professionnel pour présenter la crypto-monnaie MAINE COON (MCN) sur Base blockchain.

## 🚀 Fonctionnalités

- ✅ Design professionnel doré et noir
- ✅ Multilingue : Anglais (par défaut), Français, Espagnol, Chinois
- ✅ Mode sombre / Mode clair
- ✅ Affichage des statistiques en temps réel
- ✅ Graphique de prix (avec données de démonstration)
- ✅ Responsive design
- ✅ Optimisé pour Vercel

## 📦 Installation

```bash
npm install
```

## 🛠️ Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🌐 Déploiement sur Vercel

### Option 1 : Déploiement automatique via GitHub

1. Créez un repository GitHub pour ce projet
2. Connectez votre compte Vercel à GitHub
3. Importez le projet dans Vercel
4. Vercel détectera automatiquement Next.js et configurera le déploiement
5. À chaque push sur la branche `main`, le site sera automatiquement mis à jour

### Option 2 : Déploiement manuel

```bash
npm run build
vercel --prod
```

## 📊 Intégration des données réelles

Pour afficher les données réelles de la crypto (prix, volume, etc.), vous pouvez intégrer :

1. **CoinGecko API** : https://www.coingecko.com/en/api
   - Nécessite : Le token doit être listé sur CoinGecko
   - Endpoint : `/api/v3/simple/token_price/base`

2. **DEXScreener API** : https://docs.dexscreener.com/
   - Nécessite : L'adresse du contrat et le nom du token
   - Endpoint : `/api/v1/tokens/{chainId}/{tokenAddress}`

3. **BaseScan API** : Pour récupérer les données directement depuis la blockchain Base
   - Nécessite : Clé API BaseScan
   - Documentation : https://docs.basescan.org/

### Informations nécessaires pour l'intégration :

- **Adresse du contrat** : `0x8e627241838b660cc90F96601952dcD7f47b7831`
- **Blockchain** : Base
- **Symbole** : MCN
- **Nom** : MAINE COON

## 🎨 Personnalisation

Les couleurs peuvent être modifiées dans `tailwind.config.ts` :
- Couleur dorée : `#ffd700`
- Couleur noire : `#000000`

## 📝 Structure du projet

```
web_maineCoon/
├── app/
│   ├── [locale]/          # Pages avec support multilingue
│   └── globals.css        # Styles globaux
├── components/            # Composants React
├── messages/             # Fichiers de traduction
├── public/               # Images et assets statiques
└── ...
```

## 🔧 Technologies utilisées

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- next-intl (i18n)
- Recharts (graphiques)
- Lucide React (icônes)

## 📄 Licence

© 2026 MAINE COON (MCN). Tous droits réservés.
