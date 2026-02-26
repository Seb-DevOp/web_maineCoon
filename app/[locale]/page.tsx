import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Origins from '@/components/Origins';
import TokenFundamentals from '@/components/TokenFundamentals';
import Roadmap from '@/components/Roadmap';
import Transparency from '@/components/Transparency';
import Stats from '@/components/Stats';
import Features from '@/components/Features';

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
      <Origins />
      <TokenFundamentals />
      <Roadmap />
      <Transparency />
      <Stats />
      <Features />
    </div>
  );
}
