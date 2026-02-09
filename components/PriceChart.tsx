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
    <section className="py-20 bg-dark-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-gold">
            {t('price')} Chart
          </h2>
          <p className="text-gray-400 text-sm uppercase tracking-wider">24 Hour Price History</p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-dark-50/50 to-dark-100/50 backdrop-blur-sm p-8 rounded-2xl border border-gold/10 shadow-gold">
            <ResponsiveContainer width="100%" height={450}>
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.3} />
                <XAxis
                  dataKey="time"
                  stroke="#ffd700"
                  style={{ fontSize: '11px', fontWeight: '500' }}
                  tick={{ fill: '#999' }}
                />
                <YAxis
                  stroke="#ffd700"
                  style={{ fontSize: '11px', fontWeight: '500' }}
                  tick={{ fill: '#999' }}
                  tickFormatter={formatPrice}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0d0d0d',
                    border: '1px solid #ffd700',
                    borderRadius: '12px',
                    padding: '12px',
                  }}
                  labelStyle={{ color: '#ffd700', fontWeight: '600' }}
                  formatter={(value: number) => [formatPrice(value), 'Price']}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#ffd700"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6, fill: '#ffd700', strokeWidth: 2, stroke: '#000' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 mb-2">
            To display real-time data, integrate an API such as{' '}
            <a
              href="https://www.coingecko.com/en/api"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500 hover:text-gold-400 transition-colors font-medium"
            >
              CoinGecko
            </a>
            {' '}or{' '}
            <a
              href="https://docs.dexscreener.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500 hover:text-gold-400 transition-colors font-medium"
            >
              DEXScreener
            </a>
            .
          </p>
          <p className="text-xs text-gray-500">
            Contract address and token information required for integration.
          </p>
        </div>
      </div>
    </section>
  );
}
