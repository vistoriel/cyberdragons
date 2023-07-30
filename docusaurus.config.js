// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cyber Dragons',
  tagline: 'Dragons are cool',
  favicon: 'img/favicon.ico',

  url: 'https://vistoriel.github.io',
  baseUrl: '/cyberdragons',
  organizationName: 'vistoriel',
  projectName: 'cyberdragons',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'us',
    locales: ['us'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true
        }
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Cyber Dragons',
        logo: {
          alt: 'Cyber Dragons',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'characterSidebar',
            position: 'left',
            label: 'Персонаж',
          },
          {
            type: 'docSidebar',
            sidebarId: 'equipmentSidebar',
            position: 'left',
            label: 'Спорядження',
          },
          {
            type: 'docSidebar',
            sidebarId: 'worldSidebar',
            position: 'left',
            label: 'Світ',
          },
          {
            href: 'https://github.com/vistoriel/cyberdragons',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/vistoriel/cyberdragons',
              },
            ],
          },
        ],
        copyright: `Cyber Dragons © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
