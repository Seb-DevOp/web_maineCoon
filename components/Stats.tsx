'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { DollarSign, BarChart3, TrendingUp, ExternalLink } from 'lucide-react';

interface AssetStats {
  marketCap: number;
  dominance: number;
  change7d: number;
}

interface MarketStats {
  btc: AssetStats;
  eth: AssetStats;
}

function formatMarketCap(value: number): string {
  if (!value || value <= 0) return '$0';

  const trillions = value / 1_000_000_000_000;
  const billions = value / 1_000_000_000;

  if (trillions >= 1) {
    return `$${trillions.toFixed(2)}T`;
  }

  if (billions >= 1) {
    return `$${billions.toFixed(2)}B`;
  }

  return `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

function formatPercent(value: number): string {
  if (!Number.isFinite(value)) return '0%';
  const sign = value > 0 ? '+' : '';
  return `${sign}${value.toFixed(1)}%`;
}

export default function Stats() {
  const t = useTranslations('stats');
  const tCommon = useTranslations('common');

  const [stats, setStats] = useState<MarketStats>({
    btc: { marketCap: 0, dominance: 0, change7d: 0 },
    eth: { marketCap: 0, dominance: 0, change7d: 0 },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [globalRes, marketsRes] = await Promise.all([
          fetch('https://api.coingecko.com/api/v3/global'),
          fetch(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum&price_change_percentage=7d'
          ),
        ]);

        const globalJson = await globalRes.json();
        const marketsJson = await marketsRes.json();

        const btcMarket = marketsJson.find((c: any) => c.id === 'bitcoin');
        const ethMarket = marketsJson.find((c: any) => c.id === 'ethereum');

        const btcDominance = globalJson.data?.market_cap_percentage?.btc ?? 0;
        const ethDominance = globalJson.data?.market_cap_percentage?.eth ?? 0;

        setStats({
          btc: {
            marketCap: btcMarket?.market_cap ?? 0,
            dominance: btcDominance,
            change7d: btcMarket?.price_change_percentage_7d_in_currency ?? 0,
          },
          eth: {
            marketCap: ethMarket?.market_cap ?? 0,
            dominance: ethDominance,
            change7d: ethMarket?.price_change_percentage_7d_in_currency ?? 0,
          },
        });
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 300000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      key: 'btc',
      title: 'Bitcoin (BTC)',
      data: stats.btc,
      accent: 'text-gold-400',
    },
    {
      key: 'eth',
      title: 'Ethereum (ETH)',
      data: stats.eth,
      accent: 'text-gold-500',
    },
  ] as const;

  return (
    <section className="py-20 bg-dark-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.key}
              className="group relative bg-gradient-to-br from-dark-50/50 to-dark-100/50 backdrop-blur-sm p-8 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-gold-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-xl bg-gold/10 ${card.accent} group-hover:bg-gold/20 transition-colors`}>
                  <DollarSign className="h-6 w-6" />
                </div>
                <div className="h-2 w-2 rounded-full bg-gold-500/60 animate-pulse"></div>
              </div>

              <h3 className="text-sm text-gray-300 mb-4 font-semibold">
                {card.title}
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-gray-300">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400">
                    <BarChart3 className="h-3 w-3" />
                    <span>{t('marketCap')}</span>
                  </div>
                  <span className="font-semibold text-white">
                    {formatMarketCap(card.data.marketCap)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-300">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400">
                    <TrendingUp className="h-3 w-3" />
                    <span>{t('dominance')}</span>
                  </div>
                  <span className="font-semibold">
                    {formatPercent(card.data.dominance)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-300">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400">
                    <TrendingUp className="h-3 w-3" />
                    <span>{t('change7d')}</span>
                  </div>
                  <span
                    className={`font-semibold ${
                      card.data.change7d > 0 ? 'text-emerald-400' : card.data.change7d < 0 ? 'text-red-400' : 'text-gray-300'
                    }`}
                  >
                    {formatPercent(card.data.change7d)}
                  </span>
                </div>
              </div>
            </div>
          ))}
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
