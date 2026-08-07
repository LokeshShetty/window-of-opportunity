import { CartIcon, LogoMark } from "@/components/icons";
import { PillButton } from "@/components/PillButton/PillButton";
import styles from "./SiteHeader.module.css";
import { NAV_ITEMS } from "./constants";

export function SiteHeader() {
  return (
    <>
      <div className={styles.announcement}>
        <p className={styles.announcementText}>
          Future of human performance. Live now.{" "}
          <a className={styles.announcementLink} href="#roadmap">
            Learn more
          </a>
        </p>
      </div>

      <header className={styles.header}>
        <div className={styles.inner}>
          <a className={styles.logo} href="#top" aria-label="Ultrahuman home">
            <LogoMark size={28} />
          </a>

          <nav className={styles.nav} aria-label="Primary">
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a className={styles.navLink} href="#roadmap">
                    {item.label}
                    {item.badge ? (
                      <sup className={styles.badge}>{item.badge}</sup>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <a className={styles.cart} href="#roadmap" aria-label="Cart">
              <CartIcon size={22} />
            </a>
            <PillButton href="#roadmap" variant="brand" size="sm">
              Explore plans
            </PillButton>
          </div>
        </div>
      </header>
    </>
  );
}
