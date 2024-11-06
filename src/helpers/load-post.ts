import { allPosts } from "content-collections";

export const loadPost = (slug: string) => {
  return allPosts.find((post) => post._meta.filePath === `${slug}.mdx`);
};
