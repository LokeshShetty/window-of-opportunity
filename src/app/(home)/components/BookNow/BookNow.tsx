import { PillButton } from "@/components/PillButton/PillButton";
import styles from "./BookNow.module.css";

export function BookNow() {
  return (
    <section className={styles.section} aria-labelledby="final-heading">
      <img
        className={styles.media}
        src="/images/final-cta.svg"
        alt=""
        width={1514}
        height={937}
        loading="lazy"
        decoding="async"
      />

      <div className={styles.content}>
        <h2 id="final-heading" className={`display ${styles.heading}`}>
          Experience the future of human performance
        </h2>
        <PillButton href="#findus-heading" variant="light">
          Book now
        </PillButton>
      </div>
    </section>
  );
}
