'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import { Twitter, Instagram } from 'lucide-react';

export default function Header() {
  const t = useTranslations('common');
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold/10 bg-dark-200/95 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-12 w-12 group-hover:scale-105 transition-transform">
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
              <p className="text-xs text-gray-500">{t('subtitle')}</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="https://base.app/profile/mikapro?tab=posts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-gray-400 hover:text-gold-500 transition-colors"
            >
              Base
            </a>
            <a
              href="https://x.com/mainecoonmcn?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-gray-400 hover:text-gold-500 transition-colors inline-flex items-center gap-1"
            >
              <Twitter className="h-4 w-4" />
              X
            </a>
            <a
              href="https://www.instagram.com/mainecoon_mcn?igsh=MW5nNnpsMGNpOGlvbg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-gray-400 hover:text-gold-500 transition-colors inline-flex items-center gap-1"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
