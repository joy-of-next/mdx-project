"use client";

import { Drawer } from "vaul";
import { Menu } from "lucide-react";

import { Nav } from "./nav";
import styles from "./mobile-nav.module.css";

export function MobileNav() {
  return (
    <div>
      <Drawer.Root direction="left">
        <Drawer.Trigger className={styles.trigger}>
          <Menu />
        </Drawer.Trigger>

        <Drawer.Portal>
          <Drawer.Overlay className={styles.overlay} />
          <Drawer.Content className={styles.content}>
            <Drawer.Title />

            <div className={styles.nav}>
              <Nav />
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
