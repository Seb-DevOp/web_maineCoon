'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('common');

  return (
    <footer className="bg-dark-200 border-t border-gold/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gold-500 font-bold text-xl mb-2">{t('title')}</p>
            <p className="text-gray-500 text-sm">{t('subtitle')} • {t('onBase')}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://app.uniswap.org/#/swap?chain=base&outputCurrency=0x8e627241838b660cc90F96601952dcD7f47b7831"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold-500 transition-colors text-sm font-medium"
            >
              Uniswap
            </a>
            <a
              href="https://basescan.org/address/0x8e627241838b660cc90F96601952dcD7f47b7831"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold-500 transition-colors text-sm font-medium"
            >
              BaseScan
            </a>
            <a
              href="https://thirdweb.com/base/0x8e627241838b660cc90F96601952dcD7f47b7831"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold-500 transition-colors text-sm font-medium"
            >
              Thirdweb
            </a>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gold/10 text-center">
          <p className="text-gray-500 text-xs uppercase tracking-wider">
            © {new Date().getFullYear()} MAINE COON (MCN). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
