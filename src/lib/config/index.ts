import type { Link } from "../types";

export const SITE = {
  title: "Bytecho Tech",
  description: "🌐Where Bytes meet Echoes.",
  author: "RickyZ",
  url: "https://post.bytecho.tech",
  github: "https://github.com/Mrahmani71/astro-news",
  locale: "en-US",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/technology",
    text: "Technology",
  },

  // 在这里添加或修改你的分类
  {
    href: "/categories/teaching",  // 示例：新添加的分类
    text: "Teaching",
  },
  {
    href: "/categories/investment", // 示例：新添加的分类
    text: "Investment",
  },

];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "About us",
  },
  {
    href: "/authors",
    text: "Authors",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/privacy",
    text: "Privacy",
  },
  {
    href: "/terms",
    text: "Terms",
  },
  {
    href: "/cookie-policy",
    text: "Cookie Policy",
  },
  {
    href: "https://astro-news-six.vercel.app/rss.xml",
    text: "RSS",
  },
  {
    href: "https://astro-news-six.vercel.app/sitemap-index.xml",
    text: "Sitemap",
  },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://github.com",
    text: "GitHub",
    icon: "github",
  },
  {
    href: "httpe://www.t.me",
    text: "Telegram",
    icon: "telegram",
  },
  {
    href: "https://twitter.com",
    text: "Twitter",
    icon: "newTwitter",
  },
  {
    href: "https://www.facebook.com",
    text: "Facebook",
    icon: "facebook",
  },
];
