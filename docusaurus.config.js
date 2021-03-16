module.exports = {
  title: "nossa dev",
  tagline: "The tagline of my site",
  url: "https://sugu-sano.github.io",
  baseUrl: "/dev-blog/",
  projectName: "dev-blog",
  organizationName: "sugu-sano",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  themeConfig: {
    navbar: {
      title: "nossa dev",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/sugu-sano/dev-blog",
          label: "GitHub📦",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        Copyright © ${new Date().getFullYear()} sugu-sano. Built with Docusaurus.
      `,
    },
    prism: {
      additionalLanguages: ["csharp"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
