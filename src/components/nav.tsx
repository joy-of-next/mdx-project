"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationConfig } from "@/shared/navigation";
import styles from "./nav.module.css";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {navigationConfig.map((item) => (
        <div key={item.title} className={styles.navGroup}>
          <span className={styles.chapterTitle}>{item.title}</span>

          <ul>
            {item.items.map((nav) => (
              <li
                key={nav.path}
                className={nav.path === pathname ? styles.active : ""}
              >
                <Link href={nav.path}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
