import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import PriceChart from '@/components/PriceChart';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />
      <PriceChart />
      <Features />
    </div>
  );
}
