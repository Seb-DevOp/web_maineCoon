'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import { Globe } from 'lucide-react';
import { useState } from 'react';

const localeNames: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  es: 'ES',
  zh: '中文',
};

export default function LanguageSelector() {
  const t = useTranslations('common');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const changeLocale = (newLocale: Locale) => {
    const segments = pathname.split('/').filter(Boolean);
    if (locales.includes(segments[0] as Locale)) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    router.push(`/${segments.join('/')}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-dark-100/50 hover:bg-dark-100 transition-colors border border-gold/10 hover:border-gold/30"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4 text-gray-400" />
        <span className="text-sm font-medium text-gray-300">
          {localeNames[locale]}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-36 rounded-xl bg-dark-100/95 backdrop-blur-xl border border-gold/20 shadow-gold-lg z-20 overflow-hidden">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => changeLocale(loc)}
                className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-gold/10 ${
                  locale === loc
                    ? 'text-gold-500 font-semibold bg-gold/5'
                    : 'text-gray-300'
                }`}
              >
                {localeNames[loc]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
