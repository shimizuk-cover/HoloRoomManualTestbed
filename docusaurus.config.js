// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HoloRoom Manual', // サイトのタイトル
  tagline: 'HoloRoomの技術ドキュメント', // サイトの説明
  favicon: 'img/favicon.ico',

  // サイトURL
  url: 'https://shimizuk-cover.github.io', // サイトのURL
  baseUrl: '/HoloRoomManualTestbed/', // ベースURL

  // GitHubリポジトリ設定
  organizationName: 'shimizuk-cover', // GitHubの組織名
  projectName: 'HoloRoomManualTestbed', // GitHubリポジトリ名

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'], // 多言語対応（日本語追加）
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js', // サイドバー設定
          editUrl:
              'https://github.com/shimizuk-cover/HoloRoomManualTestbed/tree/main/docs/', // 編集リンク
        },
        blog: {
          showReadingTime: true,
          editUrl:
              'https://github.com/shimizuk-cover/HoloRoomManualTestbed/tree/main/blog/', // ブログ編集リンク
        },
        theme: {
          customCss: './src/css/custom.css', // カスタムCSS
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
          title: 'HoloRoom Manual',
          logo: {
            alt: 'HoloRoom Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: 'Docs',
            },
            {to: '/blog', label: 'Blog', position: 'left'},
            {
              href: 'https://github.com/shimizuk-cover/HoloRoomManualTestbed',
              label: 'GitHub',
              position: 'right',
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
                  label: 'Getting Started',
                  to: '/docs/intro',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'GitHub Discussions',
                  href: 'https://github.com/shimizuk-cover/HoloRoomManualTestbed/discussions',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/shimizuk-cover/HoloRoomManualTestbed',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Shimizuk-Cover. Built with Docusaurus.`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
};

export default config;
