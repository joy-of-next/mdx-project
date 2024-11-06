import { allPosts } from "content-collections";

export const loadPost = (slug: string | string[]) => {
  slug = Array.isArray(slug) ? slug.join("/") : slug;

  return allPosts.find(
    (post) => replaceUrl(post._meta.filePath) === `${slug}.mdx`
  );
};

function replaceUrl(url: string) {
  return url.replaceAll("\\", "/");
}
