import { PlusIcon } from "@/components/icons";
import { CopyBlock } from "@/components/CopyBlock/CopyBlock";
import { visionCards } from "./data";
import styles from "./Vision.module.css";

export function Vision() {
  return (
    <section className={styles.section} aria-labelledby="vision-heading">
      <CopyBlock
        id="vision-heading"
        heading="Vision: the deepest read of you, ever."
        variant="display"
        align="center"
        action={{ label: "See sample data", href: "#roadmap" }}
      >
        Every insight is paired with an action plan, supplements, nutrition,
        exercise, and follow-up consultations, built around your biology and
        your goals. With up to 3500 markers, move from signals to systems to
        improve your health and performance.
      </CopyBlock>

      <ul className={styles.grid}>
        {visionCards.map((card) => (
          <li
            key={card.title}
            className={styles.card}
            // loading color
            style={{ background: card.color }}
          >
            <img
              className={styles.cardMedia}
              src={card.src}
              alt=""
              width={588}
              height={608}
              loading="lazy"
              decoding="async"
            />

            <div className={styles.cardFooter}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <button
                type="button"
                className={styles.cardAction}
                aria-label={`More about ${card.title}`}
              >
                <PlusIcon size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
