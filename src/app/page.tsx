import { allPosts } from "content-collections";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  return (
    <div className={styles.page}>
      <h1>All Posts</h1>

      <nav>
        {allPosts.map((post) => (
          <Link key={post._meta.filePath} href={`/learn/${post._meta.path}`}>
            {post.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
