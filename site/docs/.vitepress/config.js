export default {
  title: "k-ui",
  base: process.env.NODE_ENV === "production" ? "/k-ui/" : "/",
  themeConfig: {
    nav: [{ text: "文档", link: "/guild/introduce" }],
    sidebar: {
      "/": [
        {
          text: "组件",
          items: [
            {
              text: "按钮",
              link: "/components/button",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/fenglusheng/k-ui" },
    ],
  },
};
