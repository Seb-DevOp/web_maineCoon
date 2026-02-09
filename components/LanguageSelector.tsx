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
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-50 transition-colors border border-gold/20"
      >
        <Globe className="h-4 w-4 text-gray-700 dark:text-gray-300" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {localeNames[locale]}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-32 rounded-lg bg-white dark:bg-dark-100 border border-gold/20 shadow-lg z-20">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => changeLocale(loc)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-dark-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  locale === loc
                    ? 'text-gold-500 font-semibold'
                    : 'text-gray-700 dark:text-gray-300'
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
