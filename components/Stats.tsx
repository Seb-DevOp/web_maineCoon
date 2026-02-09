'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { DollarSign, TrendingUp, BarChart3, Users, ExternalLink } from 'lucide-react';

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
    const fetchData = async () => {
      try {
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
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: t('price'),
      value: data.price,
      icon: DollarSign,
      color: 'text-gold-500',
    },
    {
      label: t('marketCap'),
      value: data.marketCap,
      icon: BarChart3,
      color: 'text-gold-400',
    },
    {
      label: t('volume'),
      value: data.volume24h,
      icon: TrendingUp,
      color: 'text-gold-500',
    },
    {
      label: t('holders'),
      value: 'Growing',
      icon: Users,
      color: 'text-gold-400',
    },
  ];

  return (
    <section className="py-20 bg-dark-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-dark-50/50 to-dark-100/50 backdrop-blur-sm p-8 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-gold-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gold/10 ${stat.color} group-hover:bg-gold/20 transition-colors`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="h-2 w-2 rounded-full bg-gold-500/60 animate-pulse"></div>
                </div>
                <h3 className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-medium">
                  {stat.label}
                </h3>
                <p className={`text-3xl font-bold ${stat.color} tracking-tight`}>{stat.value}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 p-8 bg-gradient-to-br from-dark-50/30 to-dark-100/30 backdrop-blur-sm rounded-2xl border border-gold/10">
          <p className="text-sm text-gray-400 mb-4 font-medium uppercase tracking-wide">
            {tCommon('contractAddress')}
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <code className="text-gold-400 font-mono text-sm break-all bg-dark-200/50 px-4 py-2 rounded-lg border border-gold/10">
              0x8e627241838b660cc90F96601952dcD7f47b7831
            </code>
            <a
              href="https://basescan.org/address/0x8e627241838b660cc90F96601952dcD7f47b7831"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gold-500 hover:text-gold-400 hover:bg-gold/10 rounded-lg transition-all"
              aria-label="View on BaseScan"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
