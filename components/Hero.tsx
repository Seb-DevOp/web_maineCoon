'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-dark-200 via-dark-100 to-dark-200 py-24 md:py-32">
      <div className="absolute inset-0 bg-[url('/banniere.png')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full">
              <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">On Base Network</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-gold leading-tight">
              {t('title')}
            </h1>
            <p className="text-2xl md:text-3xl text-gold-400 mb-6 font-light">
              {t('subtitle')}
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://app.uniswap.org/#/swap?chain=base&outputCurrency=0x8e627241838b660cc90F96601952dcD7f47b7831"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-4 bg-gold-gradient text-black font-semibold rounded-xl hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105 hover:brightness-110"
              >
                {t('buyUniswap')}
              </a>
              <a
                href="https://thirdweb.com/base/0x8e627241838b660cc90F96601952dcD7f47b7831"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-4 border border-gold/40 text-gold-400 font-semibold rounded-xl hover:bg-gold/10 transition-all duration-300"
              >
                {t('cta')}
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full"></div>
              <div className="relative aspect-square">
                <Image
                  src="/logo.png"
                  alt="MAINE COON Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
