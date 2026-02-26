'use client';

import { useTranslations } from 'next-intl';

const CONTRACT_ADDRESS = '0x8e627241838b660cc90F96601952dcD7f47b7831';

export default function TokenFundamentals() {
  const t = useTranslations('token');

  const items = [
    t('fixedSupply'),
    t('noMint'),
    t('noTax'),
    t('liquidity'),
    t('verifiable'),
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      // Laisser le feedback visuel au navigateur / UX minimaliste (pas de toast intrusif ici)
    } catch {
      // Silence en cas d'échec pour rester discret
    }
  };

  return (
    <section className="py-16 md:py-20 bg-dark-100 border-t border-gold/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-gold">
            {t('title')}
          </h2>
          <ul className="space-y-2 text-gray-200">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-dark-200/60 px-4 py-2 text-sm text-gray-300">
            <span className="font-medium text-gold-200">
              {t('contractLabel')}
            </span>
            <span className="font-mono text-xs text-gray-400 truncate max-w-[180px] sm:max-w-xs">
              {CONTRACT_ADDRESS}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="ml-1 rounded-full border border-gold/30 px-3 py-1 text-xs font-semibold text-gold-200 hover:bg-gold/10 transition-colors"
            >
              {t('copy')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

