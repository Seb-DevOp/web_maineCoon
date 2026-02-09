# Guide d'Intégration des Données Réelles

Ce guide explique comment intégrer les données réelles de la crypto MAINE COON (MCN) dans le site web.

## 📊 Options d'API Disponibles

### Option 1 : DEXScreener API (Recommandé pour les tokens DEX)

DEXScreener est excellent pour les tokens sur Base et autres DEX.

#### Configuration

1. **Endpoint** : `https://api.dexscreener.com/latest/dex/tokens/{tokenAddress}`

2. **Adresse du token** : `0x8e627241838b660cc90F96601952dcD7f47b7831`

3. **Exemple de requête** :
```typescript
const response = await fetch(
  'https://api.dexscreener.com/latest/dex/tokens/0x8e627241838b660cc90F96601952dcD7f47b7831'
);
const data = await response.json();
```

4. **Données disponibles** :
   - Prix actuel
   - Volume 24h
   - Variation de prix
   - Liquidité
   - Paires de trading

#### Exemple d'implémentation

Créez un fichier `lib/cryptoData.ts` :

```typescript
const CONTRACT_ADDRESS = '0x8e627241838b660cc90F96601952dcD7f47b7831';

export async function getCryptoData() {
  try {
    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/tokens/${CONTRACT_ADDRESS}`,
      { next: { revalidate: 60 } } // Cache pendant 60 secondes
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const data = await response.json();
    
    // Trouver la paire sur Base
    const basePair = data.pairs?.find(
      (pair: any) => pair.chainId === 'base' || pair.chainId === '8453'
    );
    
    if (!basePair) {
      return null;
    }
    
    return {
      price: parseFloat(basePair.priceUsd || '0'),
      priceChange24h: parseFloat(basePair.priceChange?.h24 || '0'),
      volume24h: parseFloat(basePair.volume?.h24 || '0'),
      liquidity: parseFloat(basePair.liquidity?.usd || '0'),
      marketCap: parseFloat(basePair.fdv || '0'),
    };
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    return null;
  }
}
```

Puis modifiez `components/Stats.tsx` :

```typescript
import { getCryptoData } from '@/lib/cryptoData';

export default async function Stats() {
  const data = await getCryptoData();
  
  // Utiliser les données réelles ou des valeurs par défaut
  const stats = {
    price: data?.price ? `$${data.price.toFixed(6)}` : '$0.000003',
    marketCap: data?.marketCap ? `$${(data.marketCap / 1000000).toFixed(2)}M` : 'N/A',
    volume24h: data?.volume24h ? `$${(data.volume24h / 1000).toFixed(2)}K` : 'N/A',
  };
  
  // ... reste du composant
}
```

### Option 2 : CoinGecko API

CoinGecko nécessite que le token soit listé. Si MCN n'est pas encore listé, vous devrez le soumettre.

#### Configuration

1. **Inscription** : Créez un compte sur [CoinGecko](https://www.coingecko.com/en/api)
2. **Clé API** : Obtenez votre clé API (gratuite disponible)
3. **Endpoint** : `https://api.coingecko.com/api/v3/simple/token_price/base`

#### Exemple d'implémentation

```typescript
const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY;

export async function getCryptoDataFromCoinGecko() {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/token_price/base?contract_addresses=0x8e627241838b660cc90F96601952dcD7f47b7831&vs_currencies=usd&include_24hr_change=true`,
      {
        headers: {
          'x-cg-demo-api-key': COINGECKO_API_KEY,
        },
        next: { revalidate: 60 }
      }
    );
    
    const data = await response.json();
    const tokenData = data['0x8e627241838b660cc90F96601952dcD7f47b7831'];
    
    return {
      price: tokenData.usd,
      priceChange24h: tokenData.usd_24h_change,
    };
  } catch (error) {
    console.error('Error fetching CoinGecko data:', error);
    return null;
  }
}
```

### Option 3 : BaseScan API (Données Blockchain)

Pour récupérer les données directement depuis la blockchain Base.

#### Configuration

1. **Clé API** : Créez un compte sur [BaseScan](https://basescan.org/apis)
2. **Endpoint** : `https://api.basescan.org/api`

#### Exemple d'implémentation

```typescript
const BASESCAN_API_KEY = process.env.BASESCAN_API_KEY;

export async function getTokenInfoFromBaseScan() {
  try {
    // Récupérer le nombre total de tokens
    const totalSupplyResponse = await fetch(
      `https://api.basescan.org/api?module=stats&action=tokensupply&contractaddress=0x8e627241838b660cc90F96601952dcD7f47b7831&apikey=${BASESCAN_API_KEY}`
    );
    
    const totalSupplyData = await totalSupplyResponse.json();
    const totalSupply = parseFloat(totalSupplyData.result) / 1e18; // Ajuster selon les décimales
    
    return {
      totalSupply,
    };
  } catch (error) {
    console.error('Error fetching BaseScan data:', error);
    return null;
  }
}
```

## 📈 Graphique de Prix Historique

Pour afficher un graphique avec les données historiques :

### Option A : DEXScreener (Gratuit, pas d'API key)

```typescript
export async function getPriceHistory() {
  try {
    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/tokens/0x8e627241838b660cc90F96601952dcD7f47b7831`
    );
    
    const data = await response.json();
    const basePair = data.pairs?.find((p: any) => p.chainId === 'base');
    
    // DEXScreener ne fournit pas d'historique directement
    // Vous devrez utiliser une autre source ou stocker les données vous-même
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Option B : Stocker les Données Vous-Même

Créez une API route dans `app/api/price/route.ts` :

```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  // Récupérer le prix actuel depuis DEXScreener
  const response = await fetch(
    'https://api.dexscreener.com/latest/dex/tokens/0x8e627241838b660cc90F96601952dcD7f47b7831'
  );
  const data = await response.json();
  
  // Stocker dans une base de données (Vercel Postgres, Supabase, etc.)
  // ou utiliser un service comme Upstash Redis pour le cache
  
  return NextResponse.json({ success: true });
}
```

Puis créez un cron job (Vercel Cron) pour mettre à jour les données toutes les heures.

## 🔧 Informations Nécessaires

Pour intégrer complètement les données, vous aurez besoin de :

1. ✅ **Adresse du contrat** : `0x8e627241838b660cc90F96601952dcD7f47b7831`
2. ✅ **Blockchain** : Base (Chain ID: 8453)
3. ✅ **Symbole** : MCN
4. ✅ **Nom** : MAINE COON
5. ❓ **Nombre de décimales** : (généralement 18 pour les tokens ERC-20)
6. ❓ **Total Supply** : (peut être récupéré depuis BaseScan)

## 🚀 Étapes pour Intégrer

1. **Choisir une API** : DEXScreener est le plus simple pour commencer
2. **Créer le fichier de service** : `lib/cryptoData.ts`
3. **Modifier les composants** : `components/Stats.tsx` et `components/PriceChart.tsx`
4. **Ajouter le cache** : Utiliser `next: { revalidate: 60 }` pour éviter trop de requêtes
5. **Gérer les erreurs** : Afficher des valeurs par défaut si l'API échoue
6. **Tester** : Vérifier que les données s'affichent correctement

## 💡 Recommandation

Pour commencer rapidement, utilisez **DEXScreener** car :
- ✅ Pas besoin d'API key
- ✅ Fonctionne directement avec l'adresse du contrat
- ✅ Données en temps réel
- ✅ Gratuit

Pour un graphique historique, vous devrez soit :
- Utiliser un service payant comme CoinGecko Pro
- Stocker les données vous-même avec un cron job
- Utiliser un service de données on-chain comme The Graph

## 📝 Note Importante

Les données actuellement affichées sont des **données de démonstration**. Pour afficher les vraies données, suivez les étapes ci-dessus et remplacez les fonctions mock dans `components/Stats.tsx` et `components/PriceChart.tsx`.
