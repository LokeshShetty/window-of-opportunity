import styles from "./StraightLines.module.css";
import { MARKS, VB } from "./constants";

export function StraightLines() {
  return (
    <section className={styles.section} aria-labelledby="lines-heading">
      <div className={styles.frame}>
        <svg
          className={styles.guides}
          viewBox={`0 0 ${VB.w} ${VB.h}`}
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <g className={styles.dashed}>
            <line x1="244.25" y1="22" x2="244.25" y2="917" />
            <line x1="1236.25" y1="22" x2="1236.25" y2="917" />
          </g>

          <g className={styles.rules}>
            <line x1="72.25" y1="110" x2="72.25" y2="830" />
            <line x1="1441.25" y1="110" x2="1441.25" y2="830" />
          </g>

          <g className={styles.marks}>
            {MARKS.map(({ x, y }) => (
              <g key={`${x}-${y}`}>
                <line x1={x} y1={y - 6} x2={x} y2={y + 6} />
                <line x1={x - 6} y1={y} x2={x + 6} y2={y} />
              </g>
            ))}
          </g>
        </svg>

        <svg
          className={styles.circle}
          viewBox="0 0 100 100"
          aria-hidden="true"
          focusable="false"
        >
          <circle
            className={styles.ring}
            cx="50"
            cy="50"
            r="49.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <h2 id="lines-heading" className={`display ${styles.heading}`}>
          Your health doesn&rsquo;t move in straight lines.
        </h2>
      </div>
    </section>
  );
}
