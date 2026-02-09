'use client';

import { useTheme } from './ThemeProvider';
import { useTranslations } from 'next-intl';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations('common');

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-50 transition-colors border border-gold/20"
      aria-label={theme === 'dark' ? t('lightMode') : t('darkMode')}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-gold-500" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700" />
      )}
    </button>
  );
}
