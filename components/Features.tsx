'use client';

import { useTranslations } from 'next-intl';
import { Zap, DollarSign, Users } from 'lucide-react';

export default function Features() {
  const t = useTranslations('features');

  const features = [
    {
      icon: Zap,
      title: t('fast.title'),
      description: t('fast.description'),
    },
    {
      icon: DollarSign,
      title: t('lowCost.title'),
      description: t('lowCost.description'),
    },
    {
      icon: Users,
      title: t('community.title'),
      description: t('community.description'),
    },
  ];

  return (
    <section className="py-16 bg-dark-200 dark:bg-dark-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-gold">
          {t('title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-dark-100 to-dark-200 dark:from-dark-50 dark:to-dark-100 p-8 rounded-xl border border-gold/20 shadow-gold hover:shadow-gold-lg transition-all transform hover:scale-105"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-gradient">
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gold-500 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
