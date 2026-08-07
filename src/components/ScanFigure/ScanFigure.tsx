import styles from "./ScanFigure.module.css";
import { AmbientVideo } from "@/components/AmbientVideo/AmbientVideo";
import type { ScanFigureProps } from "./types";

export function ScanFigure({ caption, src, tone, className }: ScanFigureProps) {
  return (
    <figure
      className={[styles.scan, className].filter(Boolean).join(" ")}
      data-tone={tone}
    >
      <figcaption className={styles.caption}>{caption}</figcaption>

      <span className={`${styles.tick} ${styles.tickTop}`} aria-hidden="true" />
      <span
        className={`${styles.tick} ${styles.tickBottom}`}
        aria-hidden="true"
      />
      <span
        className={`${styles.tick} ${styles.tickLeft}`}
        aria-hidden="true"
      />
      <span
        className={`${styles.tick} ${styles.tickRight}`}
        aria-hidden="true"
      />

      <AmbientVideo className={styles.media} src={src} preload="none" />
    </figure>
  );
}
