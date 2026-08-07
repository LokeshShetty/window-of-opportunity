"use client";

import { useRef } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { roadmapPanels } from "./data";
import { Panel } from "./Panel";
import { useConnectors } from "./useConnectors";
import styles from "./Roadmap.module.css";

export function Roadmap() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  useScrollProgress(sectionRef);
  const { paths, viewBox, registerPath } = useConnectors(sectionRef, lineRefs);

  const tokensIn = (p: (typeof roadmapPanels)[number]) =>
    p.lines.reduce((n, l) => n + l.tokens.length, 0);
  const wordTotal = roadmapPanels.reduce((n, p) => n + tokensIn(p), 0);

  const panelStarts = roadmapPanels.map((_, i) =>
    roadmapPanels.slice(0, i).reduce((n, p) => n + tokensIn(p), 0),
  );

  return (
    <section
      ref={sectionRef}
      className={styles.roadmap}
      id="roadmap"
      aria-labelledby="roadmap-heading"
    >
      <h2 id="roadmap-heading" className="visually-hidden">
        Your body is talking
      </h2>

      {roadmapPanels.map((panel, i) => (
        <Panel
          key={panel.id}
          panel={panel}
          first={i === 0}
          wordOffset={panelStarts[i]}
          wordTotal={wordTotal}
          registerLine={(id, el) => {
            lineRefs.current[id] = el;
          }}
        />
      ))}

      {/* one overlay for the section: the l3-l4 curve crosses a panel boundary */}
      <svg
        className={styles.connectors}
        viewBox={viewBox ?? undefined}
        aria-hidden="true"
        focusable="false"
      >
        {paths.map((path, i) => (
          <path
            key={i}
            ref={registerPath(i)}
            d={path.d}
            className={styles.connector}
          />
        ))}
      </svg>
    </section>
  );
}
