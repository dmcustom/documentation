// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dismay Custom',
  tagline: 'PCS & LMS Documentation',
  favicon: 'img/dismay-logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://dmcustom.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation/',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  organizationName: 'dmcustom', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'th'],
	localeConfigs: {
      en: {
        label: 'English',
      },
	  th: {
		label: 'ไทย',
      },
	},
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Dismay Custom',
        logo: {
          alt: 'My Site Logo',
          src: 'img/dismay-logo.png',
        },
        items: [
		  {
			type: 'docSidebar',
			sidebarId: 'pcs',
			label: 'Penetration Contact System',
			position: 'left',
		  },
		  {
			type: 'docSidebar',
			sidebarId: 'lms',
			label: 'Lovestick Massages SFX',
			position: 'left',
		  },
		  {
			type: 'localeDropdown',
			position: 'right',
		  },						  
		  {
            href: 'https://discord.gg/NGRgd9rv8G',
            label: 'Discord',
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
                label: 'Penetration Contact System',
                to: '/docs/tutorial-pcs/avatar-setup',
              },
			  {
                label: 'Lovestick Massages SFX',
                to: '/docs/tutorial-lms/avatar-setup',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {                
				label: 'Discord',
                href: 'https://discord.gg/NGRgd9rv8G',		  
              },
              {
                label: 'X',
                href: 'https://x.com/dismay_vrc',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'LinkTree',
                to: 'https://linktr.ee/dismay.vrc',
              },
              {
                label: 'VRChat',
                href: 'https://vrchat.com/home/user/usr_b6835fb7-5501-4e2f-b667-6b9f41baebe3',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dismay Custom. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
