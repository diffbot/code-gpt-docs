const { ProvidePlugin } = require("webpack");
const path = require("path");

const examplesPath = path.resolve(__dirname, "..", "examples", "src");
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CodeGPT',
  tagline: 'Easily Connect to Top AI Providers Using Their Official APIs in VSCode',
  url: 'https://docs.codegpt.co/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'codegpt',
  projectName: 'code-gpt-docs',

  i18n: {
    defaultLocale: 'en',
    locales: ["en", "pt", "es", "zh-Hans"],
    localeConfigs: {
      pt: {
        label: 'Português',
        direction: 'ltr',
        },
        es: {
          label: 'Español',
          direction: 'ltr',
      },
      zh: {
        label: '中文',
        direction: 'ltr',
      },
      {
      ch: {
        label: 'Chino',
        direction: 'ltr',
      }
    },
  },
  plugins: [
    () => ({
      name: "custom-webpack-config",
      configureWebpack: () => ({
        plugins: [
          new ProvidePlugin({
            process: require.resolve("process/browser"),
          }),
        ],
        resolve: {
          fallback: {
            path: false,
            url: false,
          },
          alias: {
            "@examples": examplesPath,
          },
        },
        module: {
          rules: [
            {
              test: examplesPath,
              use: "raw-loader",
            },
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false,
              },
            },
          ],
        },
      }),
    })
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
          },
          gtag: {
          trackingID: 'G-GEEJMKY9EX',
          anonymizeIP: true,
        },
          blog: {
            showReadingTime: true,
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'CodeGPT',
        logo: {
          alt: 'CodeGPT',
          src: 'img/mini_gpt_circle.png',
          href: '/docs/intro',
          target: '_self',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: 'https://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt', 
            label: 'Extension', 
            position: 'left'
          },
          {
            href: 'https://discord.gg/vgTGsVr69s',
            label: 'Discord',
            position: 'right',
          },
          {
            to: 'https://app.codegpt.co/login',
            label: 'Login',
            position: 'right',
            className: 'navbar-login-button',
          },
          {
            type: 'localeDropdown',
          },
        ],
      },
      footer: {
        style: 'dark',
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
                label: 'Discord',
                  href: 'https://discord.gg/vgTGsVr69s',
                },
                {
                  label: 'Product Hunt',
                  href: 'https://www.producthunt.com/posts/code-gpt'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'VSCode Extension',
                href: 'https://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt',
              },
              {
                label: 'JetBrains',
                href: 'https://plugins.jetbrains.com/plugin/24372-codegpt-chat--ai-agents',
              },
              {
                label: 'CodeGPT on Open VSX',
                href: 'https://open-vsx.org/extension/DanielSanMedium/dscodegpt'
              },
              {
                label: 'GitHub Issues',
                href: 'https://github.com/davila7/code-gpt-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CodeGPT`,
      }
    }),
};

module.exports = config;
