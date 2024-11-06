export type NavigationItem = {
  title: string;
  path: string;
};

type NavigationConfig = { title: string; items: NavigationItem[] }[];

export const navigationConfig: NavigationConfig = [
  {
    title: "介绍",
    items: [
      {
        title: "欢迎",
        path: "/learn/00-introduction/01-welcome",
      },
    ],
  },
  {
    title: "基于 MDX 的课程平台",
    items: [
      {
        title: "关于此项目",
        path: "/learn/01-get-started/01-introduction",
      },
    ],
  },
];
