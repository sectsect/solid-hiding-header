const siteUrl = import.meta.env.VITE_PUBLIC_SITE_URL ?? '';

export const AppConfig = {
  siteName: 'Solid.js Boilerplate',
  title: 'Solid.js Boilerplate',
  description: 'This is Little Project w/ Solid.js',
  locale: 'en',
  og: {
    image: {
      url: `${siteUrl}/assets/images/ogp.png`,
    },
  },
};
