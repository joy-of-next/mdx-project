import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { loadPost } from "@/helpers/load-post";

import styles from "./page.module.css";
import { Nav } from "./nav";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const slug = (await params).slug;
  const url = slug.join("/");

  const post = loadPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <aside className={styles.aside}>
        <Nav url={url} />
      </aside>

      <div className={styles.content}>
        <article>
          <header>
            <h1>{post.title}</h1>
          </header>

          <MDXRemote source={post.content} />
        </article>
      </div>
    </div>
  );
}
