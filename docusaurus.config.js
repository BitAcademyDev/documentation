// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jarvis Documentation',
  tagline: 'Documentation for the Jarvis education system',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.jarvis.bit-academy.nl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BitAcademyDev', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [require.resolve('docusaurus-lunr-search')],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
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
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Bit Academy Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/BitAcademyDev/documentation',
            'aria-label': 'GitHub repository',
            label: 'GitHub',
            position: 'right',
            className: 'navbar-github-link',
          },
        ],
      },
      themeConfig: {
        colorMode: {
          defaultMode: 'light',
          disableSwitch: true, // Doesn't seem to work
          respectPrefersColorScheme: false,
        },
      },
      footer: {
        style: 'dark',
        links: [],
        logo: {
          alt: 'Bit Academy Logo',
          src: 'img/logo.svg',
          href: 'https://www.bit-academy.nl',
          width: 160,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Bit Academy B.V.`,
      },
      prism: {
        theme: lightCodeTheme
      },
    }),
};

module.exports = config;
