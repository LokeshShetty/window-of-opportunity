import type { CSSProperties } from "react";
import type { RoadmapPanel } from "./types";
import styles from "./Roadmap.module.css";
import type { PanelProps } from "./types";

export function Panel({
  panel,
  first,
  wordOffset,
  wordTotal,
  registerLine,
}: PanelProps) {
  const panelTokens = panel.lines.reduce((n, l) => n + l.tokens.length, 0);
  const lineStarts = panel.lines.map((_, i) =>
    panel.lines.slice(0, i).reduce((n, l) => n + l.tokens.length, 0),
  );

  return (
    <article className={styles.panel} style={{ background: panel.color }}>
      <img
        className={styles.media}
        src={panel.src}
        alt=""
        width={1513}
        height={950}
        loading={first ? "eager" : "lazy"}
        decoding="async"
      />

      <div className={styles.lines}>
        {panel.lines.map((line, lineIndex) => (
          <p
            key={line.id}
            className={styles.line}
            style={
              {
                "--x": line.x,
                "--y": line.y,
                ...(line.gap === undefined ? {} : { "--gap": line.gap }),
              } as CSSProperties
            }
          >
            <span
              ref={(el) => registerLine(line.id, el)}
              className={styles.lineInner}
            >
              {line.tokens.map((token, i) => {
                const index = lineStarts[lineIndex] + i;
                const style = {
                  "--t": (wordOffset + index) / wordTotal,
                  "--tp": panelTokens > 1 ? index / (panelTokens - 1) : 0,
                } as CSSProperties;

                return typeof token === "string" ? (
                  <span key={i} data-word className={styles.word} style={style}>
                    {token}
                  </span>
                ) : (
                  <span
                    key={i}
                    className={styles.inlineRule}
                    style={style}
                    aria-hidden="true"
                  />
                );
              })}
            </span>
          </p>
        ))}
      </div>
    </article>
  );
}
