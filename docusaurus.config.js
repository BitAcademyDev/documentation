// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Bit Academy Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_white.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/BitAcademyDev/documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      themeConfig: {
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Student docs',
                to: '/docs/students',
              },
              {
                label: 'Coach docs',
                to: '/docs/coaches',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Bit-Academy',
                href: 'https://www.bit-academy.nl/'
              },
              {
                label: 'Jarvis',
                href: 'https://jarvis.bit-academy.nl',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/BitAcademyDev/documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bit Academy B.V.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
