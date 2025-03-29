// @ts-nocheck
// @ts-ignore
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

// // Import themes the new way
const { themes } = require("prism-react-renderer");
const code_themes = {
  light: themes.github,
  dark: themes.dracula,
};

// require("dotenv").config();
// const code_themes = {
//   light: require("prism-react-renderer/themes/github"),
//   dark: require("prism-react-renderer/themes/dracula"),
// };
// const { themes } = require("prism-react-renderer");

const { webpackPlugin } = require("./plugins/webpack-plugin.cjs");
const tailwindPlugin = require("./plugins/tailwind-plugin.cjs");

const sdkListLatestVersion = [];
const fs = require("fs");

const folderPath = "./docs/sidebars";

try {
  const files = fs.readdirSync(folderPath);

  // Loop through the files
  files.forEach((file) => {
    try {
      sdkListLatestVersion.push(file.split(".")[0]);
    } catch (e) {
      console.error(`Error reading file `);
    }
  });
} catch (readdirErr) {
  console.error("Error reading folder:", readdirErr);
}

// TODO: update this infos
/** @type {import('@docusaurus/types').Config} */
const metadata = {
  title: "CometChat Docs",
  url: "https://www.cometchat.com",
  baseUrl: `/${process.env.BASE_URL || 'docs'}/`,
  favicon: "/homepage/logo.png",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  onBrokenLinks: "ignore",
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = require("./docs_with_sidebar_list.json");

// TODO: update this infos
/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  // editUrl: "https://google.com",
  showLastUpdateTime: true,
  remarkPlugins: [
    [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
  ],
  sidebarPath: require.resolve("./sidebar_auto.js"),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve("./sidebar_auto.js"),
  ...options
}) {
  if (sdkListLatestVersion.includes(options?.id)) {
    sidebarPath = require.resolve(`./docs/sidebars/${options?.id}.js`);
    return [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        ...defaultSettings,
        sidebarPath,
        ...options,
      }),
    ];
  }
  return [
    "@docusaurus/plugin-content-docs",
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const getAllRedirects = () => {
  const redirects = require("./react-ui-kit_redirects.json");
  const androidRedirects = require("./android-ui-kit_redirects.json");
  const aiAndWebhooksRedirects = require("./ai-and-webhooks-redirects.json");
  const extensionRedirects = require("./extensions_redirects.json");
  const legacyNotificationsRedirects = require("./legacy_notifications_redirects.json");
  const legacyModerationRedirects = require("./moderation_redirects.json");
  return [
    ...redirects,
    ...androidRedirects,
    ...aiAndWebhooksRedirects,
    ...extensionRedirects,
    ...legacyNotificationsRedirects,
    ...legacyModerationRedirects,
  ];
};

const client_redirect_plugin = [
  "@docusaurus/plugin-client-redirects",
  {
    redirects: getAllRedirects(),
  },
];

const plugins = [
  tailwindPlugin,
  ...docs_plugins,
  webpackPlugin,
  [
    "docusaurus2-dotenv",
    {
      // path: "./.env",
      systemvars: false,
    },
  ],
  client_redirect_plugin,
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...metadata,
  plugins,
  url: 'https://comet-chat.github.io',
  baseUrl: '/cometchat-docs/',
  organizationName: 'cometchat', 
  projectName: 'cometchat-docs', 

  trailingSlash: false,
  themes: ["@docusaurus/theme-live-codeblock"],
  clientModules: [require.resolve("./src/client/define-ui-kit.js")],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: "docs-home",
          path: "docs/home",
          routeBasePath: "/home",
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/api-reference.css"),
          ],
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        googleTagManager: {
          containerId: `${process.env.GTM_CONTAINER_ID}`,
        },
      }),
    ],
  ],
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    // other stylesheets you want to apply globally
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      // navbar: {
      //   logo: {
      //     href: "/",
      //     src: "/imgs/logo.svg",
      //     srcDark: "/imgs/logo.svg",
      //     alt: "Logo",
      //     width: "150px",
      //   },

      //   items: [
      //     {
      //       label: "Platform",
      //       type: "dropdown",
      //       items: [
      //         {
      //           type: "html",
      //           value: "<div></div>",
      //           className: "my-website-dropdown",
      //         },
      //       ],
      //     },
      //     {
      //       label: "Integrate",
      //       type: "dropdown",
      //       items: [
      //         {
      //           type: "html",
      //           value: "<div></div>",
      //           className: "my-website-dropdown",
      //         },
      //       ],
      //     },
      //     {
      //       type: "search",
      //       position: "right",
      //     },
      //     {
      //       label: "Dashboard",
      //       to: "https://app.cometchat.com/",
      //       position: "right",
      //       className: "navbar-book-demo",
      //     },
      //     {
      //       label: "Contact Support",
      //       to: "https://help.cometchat.com/hc/en-us/requests/new",
      //       position: "right",
      //       className: "schedule_a_demo_button",
      //     },
      //   ],
      // },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          "dart",
          "ruby",
          "groovy",
          "kotlin",
          "java",
          "swift",
          "objectivec",
        ],
        magicComments: [
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-block-error-line",
            line: "highlight-next-line-error",
          },
        ],
      },
      algolia: {
        appId: process.env.ALGOLIA_API_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,

        contextualSearch: false,
        searchParameters: {
          facetFilters: [],
        },
        searchPagePath: "search",
      },
    }),
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
  onBrokenLinks: "warn",
  onBrokenAnchors: "warn",
  onBrokenMarkdownLinks: "warn",
  markdown: {
    format: "mdx",
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: true,
    },
    preprocessor: ({ filePath, fileContent }) => {
      return fileContent.replaceAll(
        /!\[.*\((\.*\/.*\.(jpg|jpeg|png))\)/g,
        (match, g) => {
          return `<Image path={require('${g}').default} />`;
        }
      );
    },
  },
};

module.exports = config;