const path = require("path");

module.exports = {
  title: "Project OpenUBL",
  tagline: "Crea XMLs basados en UBL y después envíalos a la SUNAT",
  url: "https://project-openubl.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  customFields: {
    description:
      "Herramientas open source para facturación electrónica. Project OpenUBL te ayuda a crear XMLs basados en UBL y después enviarlos a la SUNAT | Project OpenUBL",
  },
  organizationName: "project-openubl", // Usually your GitHub org/user name.
  projectName: "project-openubl.github.io", // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: "supportus",
      content:
        '⭐️ Si te gusta Project OpenUBL, danos una estrella en <a target="_blank" rel="noopener noreferrer" href="https://github.com/project-openubl">GitHub</a>! ⭐️',
    },
    navbar: {
      title: "Project OpenUBL",
      logo: {
        alt: "Project OpenUBL",
        src: "img/project-openubl-logo.png",
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "introduction",
          label: "Docs",
        },
        {
          type: "doc",
          docId: "xbuilder/index",
          label: "XBuilder",
          position: "left",
        },
        {
          type: "doc",
          docId: "xsender/index",
          label: "XSender",
          position: "left",
        },
        {
          type: "doc",
          docId: "searchpe/index",
          label: "Searchpe",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        // right
        {
          to: "about",
          label: "About",
          position: "right",
        },
        {
          href: "https://github.com/project-openubl",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentación",
          items: [
            {
              label: "Crear XMLs",
              to: "docs/xbuilder/",
            },
            {
              label: "Enviar XMLs",
              to: "docs/xsender/",
            },
            {
              label: "Consulta RUC",
              to: "docs/searchpe/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Youtube",
              href:
                "https://www.youtube.com/channel/UChq3xxjyDgjcU346rp0bbtA?view_as=subscriber",
            },
            {
              label: "Únete al chat",
              href: "https://projectopenubl.zulipchat.com/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/openubl",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/project-openubl",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Project OpenUBL, Inc.`,
    },
    googleAnalytics: {
      trackingID: "UA-152706512-2",
    },
    gtag: {
      trackingID: "UA-152706512-2",
    },
    algolia: {
      apiKey: "6e010168a70995156309a77c5164c443",
      indexName: "project-openubl",
      contextualSearch: false,
    },
  },
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Red+Hat+Text&display=swap",
    "https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;700&display=swap",
  ],
  scripts: [
    {
      src:
        "https://project-openubl.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/o2joag/b/24/a44af77267a987a660377e5c46e0fb64/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=bd3ea422",
      async: true,
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/project-openubl/website/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/project-openubl/website/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        cacheTime: 600 * 1000, // 600 sec - cache purge period
        changefreq: "weekly",
        priority: 0.5,
        trailingSlash: false,
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, "redoc-plugin"),
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: ["appInstalled", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/project-openubl-logo.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "img/project-openubl-logo.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "img/project-openubl-logo.png",
            color: "rgb(62, 204, 94)",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "img/project-openubl-logo.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
        ],
      },
    ],
  ],
};
