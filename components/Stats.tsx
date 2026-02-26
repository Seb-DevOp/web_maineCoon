'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { DollarSign, TrendingUp, BarChart3, ExternalLink } from 'lucide-react';

interface MarketData {
  btcPrice: string;
  btcDominance: string;
  ethPrice: string;
  ethDominance: string;
}

export default function Stats() {
  const t = useTranslations('stats');
  const tCommon = useTranslations('common');
  const [data, setData] = useState<MarketData>({
    btcPrice: '$0',
    btcDominance: '0%',
    ethPrice: '$0',
    ethDominance: '0%',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/global');
        const json = await res.json();

        const btc = json.data?.market_cap_percentage?.btc ?? 0;
        const eth = json.data?.market_cap_percentage?.eth ?? 0;
        const btcPrice = json.data?.market_cap_percentage
          ? json.data.total_market_cap.usd * (btc / 100)
          : 0;
        const ethPrice = json.data?.market_cap_percentage
          ? json.data.total_market_cap.usd * (eth / 100)
          : 0;

        setData({
          btcPrice: `$${btcPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
          btcDominance: `${btc.toFixed(1)}%`,
          ethPrice: `$${ethPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
          ethDominance: `${eth.toFixed(1)}%`,
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
      label: t('btcPrice'),
      value: data.btcPrice,
      icon: DollarSign,
      color: 'text-gold-500',
    },
    {
      label: t('btcDominance'),
      value: data.btcDominance,
      icon: BarChart3,
      color: 'text-gold-400',
    },
    {
      label: t('ethPrice'),
      value: data.ethPrice,
      icon: TrendingUp,
      color: 'text-gold-500',
    },
    {
      label: t('ethDominance'),
      value: data.ethDominance,
      icon: BarChart3,
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
