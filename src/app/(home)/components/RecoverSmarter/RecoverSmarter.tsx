import { protocols } from "./data";
import { Accordion } from "@/components/Accordion/Accordion";
import { CopyBlock } from "@/components/CopyBlock/CopyBlock";
import { ScanFigure } from "@/components/ScanFigure/ScanFigure";
import styles from "./RecoverSmarter.module.css";

export function RecoverSmarter() {
  return (
    <section className={styles.section} aria-labelledby="recover-heading">
      <div className={styles.grid}>
        <div className={styles.panel}>
          <CopyBlock
            id="recover-heading"
            heading="Recover smarter"
            variant="display"
            action={{ label: "Book now", href: "#findus-heading" }}
          >
            A curated suite of evidence-backed recovery protocols designed to
            accelerate cellular repair, reduce inflammation, and optimize
            metabolic recovery.
          </CopyBlock>

          <Accordion items={protocols} labelledBy="recover-heading" />
        </div>

        <ScanFigure
          src="/video/blob-track.mp4"
          tone="dark"
          className={styles.scan}
          caption={"10+ Protocols.\nDesigned to work."}
        />
      </div>
    </section>
  );
}
