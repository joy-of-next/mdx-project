import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { loadContent } from "@/helpers/file-helper";
import styles from "./page.module.css";

export default async function Home() {
  const content = await loadContent();

  if (content === null) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <MDXRemote source={content} />
    </div>
  );
}
