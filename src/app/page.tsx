import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  return (
    <div className={styles.page}>
      <h1>欢迎来学习 Joy of Next</h1>

      <Link href="/learn">点击进入课程</Link>
    </div>
  );
}
