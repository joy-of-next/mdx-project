import { MobileNav } from "@/components/mobile-nav";
import { Nav } from "@/components/nav";

import styles from "./layout.module.css";

export default function LearnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <aside className={styles.aside}>
        <Nav />
      </aside>

      <div className={styles.content}>
        <MobileNav />
        {children}
      </div>
    </div>
  );
}
