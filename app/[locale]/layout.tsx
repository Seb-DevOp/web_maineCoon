import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { locales, type Locale } from '@/i18n';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mainecoonmcn.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Maine Coon (MCN)',
    template: '%s | Maine Coon (MCN)',
  },
  description: 'Maine Coon (MCN) is a community-driven token deployed on Base.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Maine Coon (MCN)',
    title: 'Maine Coon (MCN)',
    description: 'Official website of Maine Coon (MCN) on Base.',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Maine Coon (MCN) Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maine Coon (MCN)',
    description: 'Official website of Maine Coon (MCN) on Base.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <div className="min-h-screen bg-dark-200 transition-colors">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
