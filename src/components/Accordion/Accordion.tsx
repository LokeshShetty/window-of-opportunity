import { PlusIcon } from "@/components/icons";
import styles from "./Accordion.module.css";
import type { AccordionProps } from "./types";

export function Accordion({ items, labelledBy }: AccordionProps) {
  return (
    <div className={styles.list} role="group" aria-labelledby={labelledBy}>
      {items.map((item) => (
        <details key={item.label} className={styles.item}>
          <summary className={styles.summary}>
            <span className={styles.label}>{item.label}</span>
            <PlusIcon size={20} className={styles.icon} />
          </summary>
          <div className={styles.panel}>
            <p className={styles.body}>{item.body}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
