import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import PriceChart from '@/components/PriceChart';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      <Hero />
      <Stats />
      <PriceChart />
      <Features />
    </div>
  );
}
