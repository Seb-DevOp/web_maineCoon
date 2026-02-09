'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-dark-200 via-dark-100 to-dark-200 dark:from-dark-200 dark:via-dark-100 dark:to-dark-200 py-20">
      <div className="absolute inset-0 bg-[url('/banniere.png')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-gold">
              {t('title')}
            </h1>
            <p className="text-2xl md:text-3xl text-gold-400 mb-6 font-semibold">
              {t('subtitle')}
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://thirdweb.com/base/0x8e627241838b660cc90F96601952dcD7f47b7831"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gold-gradient text-black font-bold rounded-lg hover:shadow-gold-lg transition-all transform hover:scale-105"
              >
                {t('cta')}
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
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
