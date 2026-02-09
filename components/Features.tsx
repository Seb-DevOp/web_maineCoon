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
    <section className="py-20 bg-dark-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-gold">
            {t('title')}
          </h2>
          <p className="text-gray-400 text-sm uppercase tracking-wider">Why Choose MAINE COON</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-dark-50/50 to-dark-100/50 backdrop-blur-sm p-10 rounded-2xl border border-gold/10 hover:border-gold/30 shadow-gold hover:shadow-gold-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold-gradient group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gold-500 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
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
