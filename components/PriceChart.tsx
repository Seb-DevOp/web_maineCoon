'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface PriceData {
  time: string;
  price: number;
}

export default function PriceChart() {
  const t = useTranslations('common');
  const [priceData, setPriceData] = useState<PriceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Générer des données de démonstration
    // Dans un vrai projet, vous devriez récupérer ces données depuis une API
    // comme CoinGecko, DEXScreener, ou directement depuis la blockchain Base
    
    const generateMockData = () => {
      const data: PriceData[] = [];
      const basePrice = 0.000003;
      const now = new Date();
      
      for (let i = 23; i >= 0; i--) {
        const date = new Date(now);
        date.setHours(date.getHours() - i);
        const variation = (Math.random() - 0.5) * 0.000001;
        data.push({
          time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          price: basePrice + variation,
        });
      }
      
      return data;
    };

    // Simuler un chargement
    setTimeout(() => {
      setPriceData(generateMockData());
      setLoading(false);
    }, 500);

    // Rafraîchir toutes les minutes
    const interval = setInterval(() => {
      setPriceData(generateMockData());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (value: number) => {
    return `$${value.toFixed(6)}`;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-dark-100 dark:to-dark-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-gold">
          {t('price')} Chart
        </h2>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
          </div>
        ) : (
          <div className="bg-white dark:bg-dark-100 p-6 rounded-xl border border-gold/20 shadow-gold">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis
                  dataKey="time"
                  stroke="#ffd700"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="#ffd700"
                  style={{ fontSize: '12px' }}
                  tickFormatter={formatPrice}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #ffd700',
                    borderRadius: '8px',
                  }}
                  formatter={(value: number) => formatPrice(value)}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#ffd700"
                  strokeWidth={2}
                  dot={{ fill: '#ffd700', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            💡 Pour afficher les données réelles, vous pouvez intégrer une API comme{' '}
            <a
              href="https://www.coingecko.com/en/api"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500 hover:underline"
            >
              CoinGecko
            </a>
            {' '}ou{' '}
            <a
              href="https://docs.dexscreener.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500 hover:underline"
            >
              DEXScreener
            </a>
            . Vous aurez besoin de l&apos;adresse du contrat et du nom du token.
          </p>
        </div>
      </div>
    </section>
  );
}
