const config = {
  ...baseConfig,
  url: 'https://grafana.com',
  baseUrl: 'developers/saga/',

  themeConfig: {
    ...baseConfig.themeConfig,
    navbar: {
      ...baseConfig.themeConfig.navbar,
      items: [
        ...baseConfig.themeConfig.navbar.items,
        {
          href: 'https://grafana.com/developers',
          label: 'Dev Portal Home',
          position: 'right',
  i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ja'],
      localeConfigs: {
        en: {
          label: 'English',
        },
        ja: {
          label: '日本語',
        },
      },
    },
};

module.exports = config;
