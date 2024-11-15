import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { loadPost } from "@/helpers/load-post";
import { MDX_COMPONENTS } from "@/shared/mdx-components";

import styles from "./page.module.css";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const slug = (await params).slug;
  const post = loadPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="article">
      <header className={styles.header}>
        <h1>{post.title}</h1>
      </header>

      <MDXRemote source={post.content} components={MDX_COMPONENTS} />
    </article>
  );
}
