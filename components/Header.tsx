'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const t = useTranslations('common');
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold/20 bg-white/80 dark:bg-dark-200/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-12 w-12">
              <Image
                src="/logo.png"
                alt="MAINE COON Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold gradient-gold">{t('title')}</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gold-500 transition-colors"
            >
              Home
            </Link>
            <a
              href="https://thirdweb.com/base/0x8e627241838b660cc90F96601952dcD7f47b7831"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gold-500 transition-colors"
            >
              {t('swap')}
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
