'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,215,0,0.06),transparent_65%)]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-10">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60">
            <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full" />
            <div className="relative w-full h-full rounded-full border border-gold/30 bg-dark-200/60 backdrop-blur">
              <Image
                src="/logo.png"
                alt="MCN Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              {t('line1')}
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              {t('line2')}
            </p>
          </div>

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
              href="https://app.uniswap.org/#/swap?chain=base&outputCurrency=0x8e627241838b660cc90F96601952dcD7f47b7831"
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
