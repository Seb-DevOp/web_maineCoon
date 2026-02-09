import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['d391b93f5f62d9c15f67142e43841acc.ipfscdn.io'],
  },
};

export default withNextIntl(nextConfig);
