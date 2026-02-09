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
      className="p-2 rounded-xl bg-dark-100/50 hover:bg-dark-100 transition-colors border border-gold/10 hover:border-gold/30"
      aria-label={theme === 'dark' ? t('lightMode') : t('darkMode')}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-gold-500" />
      ) : (
        <Moon className="h-5 w-5 text-gray-300" />
      )}
    </button>
  );
}
