import Image from "next/image";
import { CopyBlock } from "@/components/CopyBlock/CopyBlock";
import styles from "./InsightAction.module.css";
import { PANELS } from "./data";

export function InsightAction() {
  return (
    <section className={styles.section} aria-labelledby="insight-heading">
      <div className={styles.grid}>
        <CopyBlock
          id="insight-heading"
          heading="Look beyond the present"
          action={{ label: "Explore plans", href: "#roadmap" }}
          className={styles.copyStart}
        >
          Advanced diagnostics across XX+ markers — metabolism, cardiovascular
          fitness, body composition, biomechanics, sleep, and genetics — all
          connected. Each signal informs the next, giving you one unified system
          of clarity and context.
        </CopyBlock>

        <div className={styles.stack}>
          {PANELS.map((panel) => (
            <figure key={panel.word} className={styles.card}>
              <Image
                className={styles.cardMedia}
                src={panel.src}
                alt=""
                width={1296}
                height={972}
                placeholder="blur"
                blurDataURL={panel.blur}
                sizes="(width < 60rem) 92vw, 648px"
              />
              <figcaption className={`display ${styles.word}`}>
                {panel.word}
              </figcaption>
            </figure>
          ))}
        </div>

        <CopyBlock
          heading="Drive your future"
          action={{ label: "Explore plans", href: "#roadmap" }}
          className={styles.copyEnd}
        >
          Sleep optimization, breathwork, cold exposure, nutrition, and movement
          therapies — unified into one cohesive recovery system. Every signal
          works in sync, helping your body restore, adapt, and perform at its
          best.
        </CopyBlock>
      </div>
    </section>
  );
}
