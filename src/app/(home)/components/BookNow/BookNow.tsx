import Image from "next/image";
import { PillButton } from "@/components/PillButton/PillButton";
import styles from "./BookNow.module.css";

export function BookNow() {
  return (
    <section className={styles.section} aria-labelledby="final-heading">
      <Image
        className={styles.media}
        src="/images/final-cta.jpg"
        alt=""
        fill
        sizes="100vw"
        loading="lazy"
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
