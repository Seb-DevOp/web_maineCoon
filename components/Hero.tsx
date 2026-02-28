'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Bannière plein écran */}
      <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]">
        <Image
          src="/banniere.png"
          alt="MCN Banner"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
            {t('title')}
          </h1>
          <p className="text-base md:text-lg text-gray-300">
            {t('line1')}
          </p>
          <p className="text-base md:text-lg text-gray-300">
            {t('line2')}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://basescan.org/address/0x8e627241838b660cc90F96601952dcD7f47b7831"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gold/40 text-gold-300 text-sm font-semibold rounded-full hover:bg-gold/10 transition-colors"
            >
              {t('viewContract')}
            </a>
            <a
              href="https://base.app/coin/base-mainnet/0x8e627241838b660cc90f96601952dcd7f47b7831"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gold-gradient text-black text-sm font-semibold rounded-full hover:brightness-110 hover:shadow-gold-lg transition-all"
            >
              {t('buyOnBase')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
