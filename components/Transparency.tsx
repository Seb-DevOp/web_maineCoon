'use client';

import { useTranslations } from 'next-intl';

export default function Transparency() {
  const t = useTranslations('transparency');

  const items = [
    t('ownership'),
    t('liquidity'),
    t('alignment'),
    t('onchain'),
  ];

  return (
    <section className="py-16 md:py-20 bg-dark-100 border-t border-gold/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-gold">
            {t('title')}
          </h2>
          <ul className="space-y-3 text-gray-200">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

