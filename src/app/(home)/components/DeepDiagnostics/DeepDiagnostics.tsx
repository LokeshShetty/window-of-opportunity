import { diagnostics } from "./data";
import { Accordion } from "@/components/Accordion/Accordion";
import { CopyBlock } from "@/components/CopyBlock/CopyBlock";
import { ScanFigure } from "@/components/ScanFigure/ScanFigure";
import styles from "./DeepDiagnostics.module.css";

export function DeepDiagnostics() {
  return (
    <section className={styles.section} aria-labelledby="diagnostics-heading">
      <div className={styles.grid}>
        <ScanFigure
          src="/video/body-scan.mp4"
          tone="light"
          className={styles.scan}
          caption={"120+ Markers.\nOne complete picture."}
        />

        <div className={styles.panel}>
          <CopyBlock
            id="diagnostics-heading"
            heading="Deep Diagnostics"
            variant="display"
            action={{ label: "Book now", href: "#findus-heading" }}
          >
            A curated suite of evidence-backed recovery protocols designed to
            accelerate cellular repair, reduce inflammation, and optimize
            metabolic recovery.
          </CopyBlock>

          <Accordion items={diagnostics} labelledBy="diagnostics-heading" />
        </div>
      </div>
    </section>
  );
}
