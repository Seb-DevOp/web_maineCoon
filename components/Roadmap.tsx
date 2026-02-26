'use client';

import { useTranslations } from 'next-intl';

export default function Roadmap() {
  const t = useTranslations('roadmap');

  const phases = [
    {
      key: 'phase1',
      title: t('phase1.title'),
      items: [
        t('phase1.items.0'),
        t('phase1.items.1'),
        t('phase1.items.2'),
        t('phase1.items.3'),
      ],
    },
    {
      key: 'phase2',
      title: t('phase2.title'),
      items: [
        t('phase2.items.0'),
        t('phase2.items.1'),
        t('phase2.items.2'),
      ],
    },
    {
      key: 'phase3',
      title: t('phase3.title'),
      items: [
        t('phase3.items.0'),
        t('phase3.items.1'),
        t('phase3.items.2'),
      ],
    },
    {
      key: 'phase4',
      title: t('phase4.title'),
      items: [
        t('phase4.items.0'),
        t('phase4.items.1'),
        t('phase4.items.2'),
        t('phase4.items.3'),
        t('phase4.items.4'),
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-dark-200 border-t border-gold/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-gold">
              {t('title')}
            </h2>
            <p className="text-gray-400 text-sm uppercase tracking-wider">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {phases.map((phase) => (
              <div
                key={phase.key}
                className="rounded-2xl border border-gold/15 bg-dark-100/70 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gold-200 mb-4">
                  {phase.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  {phase.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

