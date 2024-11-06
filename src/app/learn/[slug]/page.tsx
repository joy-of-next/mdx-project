import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { loadPost } from "@/helpers/load-post";

import styles from "./page.module.css";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = loadPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles.article}>
      <header>
        <h1>{post.title}</h1>
      </header>

      <MDXRemote source={post.content} />
    </article>
  );
}
