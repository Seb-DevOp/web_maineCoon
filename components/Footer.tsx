'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const tFooter = useTranslations('footer');
  const tRoadmap = useTranslations('roadmap');

  return (
    <footer className="bg-dark-200 border-t border-gold/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <p className="text-gold-500 font-bold text-xl mb-1">
                {tFooter('brand')}
              </p>
              <p className="text-gray-300 text-sm">
                {tFooter('builtOnBase')}
              </p>
              <p className="text-gray-400 text-sm">
                {tFooter('longTerm')}
              </p>
            </div>

            <div className="flex flex-wrap justify-start md:justify-end gap-8 text-sm font-medium">
              <a
                href="https://app.uniswap.org/#/swap?chain=base&outputCurrency=0x8e627241838b660cc90F96601952dcD7f47b7831"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-500 transition-colors"
              >
                Uniswap
              </a>
              <a
                href="https://basescan.org/address/0x8e627241838b660cc90F96601952dcD7f47b7831"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-500 transition-colors"
              >
                BaseScan
              </a>
              <a
                href="https://thirdweb.com/base/0x8e627241838b660cc90F96601952dcD7f47b7831"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-500 transition-colors"
              >
                Thirdweb
              </a>
            </div>
          </div>

          <div className="border-t border-gold/10 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-gray-300">
              <div>
                <p className="font-semibold text-gold-300 mb-2">
                  {tRoadmap('phase1.title')}
                </p>
                <p>{tRoadmap('phase1.items.0')}</p>
                <p>{tRoadmap('phase1.items.1')}</p>
              </div>
              <div>
                <p className="font-semibold text-gold-300 mb-2">
                  {tRoadmap('phase2.title')}
                </p>
                <p>{tRoadmap('phase2.items.0')}</p>
                <p>{tRoadmap('phase2.items.1')}</p>
              </div>
              <div>
                <p className="font-semibold text-gold-300 mb-2">
                  {tRoadmap('phase3.title')}
                </p>
                <p>{tRoadmap('phase3.items.0')}</p>
                <p>{tRoadmap('phase3.items.1')}</p>
              </div>
              <div>
                <p className="font-semibold text-gold-300 mb-2">
                  {tRoadmap('phase4.title')}
                </p>
                <p>{tRoadmap('phase4.items.0')}</p>
                <p>{tRoadmap('phase4.items.1')}</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-[11px] uppercase tracking-wider">
                © {new Date().getFullYear()} MCN. {tFooter('rights')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
