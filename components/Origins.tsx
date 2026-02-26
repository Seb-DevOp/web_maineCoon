'use client';

import { useTranslations } from 'next-intl';

export default function Origins() {
  const t = useTranslations('origins');

  const principles = [
    t('principles.discipline'),
    t('principles.structure'),
    t('principles.longevity'),
  ];

  return (
    <section className="py-16 md:py-20 bg-dark-200 border-t border-gold/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-gold">
            {t('title')}
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>{t('intro1')}</p>
            <p>{t('intro2')}</p>
            <p className="mt-4 font-medium text-gold-200">
              {t('perspective')}
            </p>
          </div>
          <ul className="mt-4 space-y-2 text-gray-200">
            {principles.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm uppercase tracking-wider text-gray-400">
            {t('conclusion')}
          </p>
        </div>
      </div>
    </section>
  );
}

