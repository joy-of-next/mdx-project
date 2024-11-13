import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { loadPost } from "@/helpers/load-post";

import styles from "./page.module.css";
import { Nav } from "./nav";
import { MDX_COMPONENTS } from "@/shared/mdx-components";
import { MobileNav } from "./mobile-nav";

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
    <div className={styles.page}>
      <aside className={styles.aside}>
        <Nav />
      </aside>

      <div className={styles.content}>
        <MobileNav />

        <article className="article">
          <header className={styles.header}>
            <h1>{post.title}</h1>
          </header>

          <MDXRemote source={post.content} components={MDX_COMPONENTS} />
        </article>
      </div>
    </div>
  );
}
