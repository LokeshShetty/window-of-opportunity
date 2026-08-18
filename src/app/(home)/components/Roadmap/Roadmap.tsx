"use client";

import { useRef } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { roadmapPanels } from "./data";
import { Panel } from "./Panel";
import { useConnectors } from "./useConnectors";
import styles from "./Roadmap.module.css";

export function Roadmap() {
  // the box every connector is measured inside
  const sectionRef = useRef<HTMLElement>(null);
  // each line's element, so we can find where its words sit
  const lineRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  // Firefox only: writes scroll progress to --p so the words can still fade in
  useScrollProgress(sectionRef);

  // paths = the curves to draw, viewBox = section size, registerPath = hands
  // each <path> to the loop that reveals it on scroll
  const { paths, viewBox, registerPath } = useConnectors(sectionRef, lineRefs);

  // each word's place in the section, used to stagger the fallback reveal
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
      {/* the section is titled by its artwork, so screen readers get it here */}
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
          // stores the line element so the connectors know where to start and end
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
