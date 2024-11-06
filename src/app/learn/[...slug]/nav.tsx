import Link from "next/link";
import { navigationConfig, type NavigationItem } from "@/shared/navigation";
import styles from "./nav.module.css";

export function Nav({ url }: { url: string }) {
  return (
    <div className={styles.nav}>
      {navigationConfig.map((item, index) => (
        <div key={item.title} className={styles.navGroup}>
          <p>第 {index + 1} 章</p>
          <h2>{item.title}</h2>
          <NavItem items={item.items} url={url} />
        </div>
      ))}
    </div>
  );
}

function NavItem({ items, url }: { items: NavigationItem[]; url: string }) {
  return (
    <ol className={styles.navItem}>
      {items.map((nav) => (
        <li key={nav.path}>
          <Link
            href={nav.path}
            className={`${nav.path} ${
              "/learn/" + url === nav.path ? styles.active : ""
            }`}
          >
            {nav.title}
          </Link>
        </li>
      ))}
    </ol>
  );
}
