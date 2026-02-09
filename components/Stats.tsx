'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface CryptoData {
  price: string;
  marketCap: string;
  volume24h: string;
}

export default function Stats() {
  const t = useTranslations('stats');
  const tCommon = useTranslations('common');
  const [data, setData] = useState<CryptoData>({
    price: '$0.000003',
    marketCap: 'N/A',
    volume24h: 'N/A',
  });

  useEffect(() => {
    // Vous pouvez remplacer cela par un appel API réel
    // Pour l'instant, on utilise les données de thirdweb
    const fetchData = async () => {
      try {
        // Ici vous pouvez ajouter un appel API pour récupérer les données en temps réel
        // Par exemple depuis CoinGecko, DEXScreener, ou directement depuis la blockchain
        setData({
          price: '$0.000003',
          marketCap: 'N/A',
          volume24h: 'N/A',
        });
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchData();
    // Rafraîchir toutes les 30 secondes
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: t('price'),
      value: data.price,
      icon: '💰',
    },
    {
      label: t('marketCap'),
      value: data.marketCap,
      icon: '📊',
    },
    {
      label: t('volume'),
      value: data.volume24h,
      icon: '📈',
    },
    {
      label: t('holders'),
      value: 'Growing',
      icon: '👥',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-dark-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-dark-100 to-dark-200 dark:from-dark-50 dark:to-dark-100 p-6 rounded-xl border border-gold/20 shadow-gold hover:shadow-gold-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <div className="h-1 w-1 rounded-full bg-gold-500 animate-pulse"></div>
              </div>
              <h3 className="text-sm text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-wide">
                {stat.label}
              </h3>
              <p className="text-2xl font-bold text-gold-500">{stat.value}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-dark-100 dark:bg-dark-50 rounded-xl border border-gold/20">
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-2">
            {tCommon('contractAddress')}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <code className="text-gold-500 font-mono text-sm break-all">
              0x8e627241838b660cc90F96601952dcD7f47b7831
            </code>
            <a
              href="https://basescan.org/address/0x8e627241838b660cc90F96601952dcD7f47b7831"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500 hover:text-gold-400 transition-colors"
            >
              🔗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
