import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import { roadmapConnectors } from "./data";
import { DRAW_SPAN } from "./constants";
import { arcPath, endpoints, straightPath } from "./geometry";
import type { ConnectorPath } from "./types";

type LineRefs = RefObject<Record<string, HTMLSpanElement | null>>;

export function useConnectors(
  sectionRef: RefObject<HTMLElement | null>,
  lineRefs: LineRefs,
) {
  const pathRefs = useRef<Array<SVGPathElement | null>>([]);
  const [paths, setPaths] = useState<ConnectorPath[]>([]);
  const [viewBox, setViewBox] = useState<string | null>(null);

  const registerPath = useCallback(
    (index: number) => (el: SVGPathElement | null) => {
      pathRefs.current[index] = el;
    },
    [],
  );

  const measure = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const base = section.getBoundingClientRect();
    if (base.width === 0 || base.height === 0) return;

    const rectOf = (
      id: string,
      word?: number | [number, number],
    ): DOMRect | null => {
      const el = lineRefs.current[id];
      if (!el) return null;

      const relative = (r: DOMRect) =>
        new DOMRect(r.left - base.left, r.top - base.top, r.width, r.height);

      if (word === undefined) return relative(el.getBoundingClientRect());

      const words = el.querySelectorAll("[data-word]");
      const pick = (i: number) => words[i < 0 ? words.length + i : i];

      if (typeof word === "number") {
        const picked = pick(word);
        return relative((picked ?? el).getBoundingClientRect());
      }

      const first = pick(word[0]);
      const second = pick(word[1]);
      if (!first || !second) return relative(el.getBoundingClientRect());
      const a = first.getBoundingClientRect();
      const b = second.getBoundingClientRect();
      return relative(
        new DOMRect(
          a.right,
          Math.min(a.top, b.top),
          b.left - a.right,
          Math.max(a.bottom, b.bottom) - Math.min(a.top, b.top),
        ),
      );
    };

    const next: ConnectorPath[] = [];
    for (const c of roadmapConnectors) {
      const a = rectOf(c.from, c.fromWord);
      const b = rectOf(c.to, c.toWord);
      if (!a || !b) continue;

      const { from, to } = endpoints(a, b, c, base.width / 1512);

      if (to.y <= from.y) continue;

      next.push({
        d:
          c.shape === "arc"
            ? arcPath(from, to, c.curve)
            : straightPath(from, to),
        targetY: to.y,
      });
    }

    setPaths(next);
    setViewBox(`0 0 ${base.width.toFixed(1)} ${base.height.toFixed(1)}`);
  }, [sectionRef, lineRefs]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new ResizeObserver(measure);
    observer.observe(section);
    for (const el of Object.values(lineRefs.current))
      if (el) observer.observe(el);

    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) measure();
    });

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [measure, sectionRef, lineRefs]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || paths.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (new URLSearchParams(window.location.search).has("lines")) {
      section.setAttribute("data-debug-lines", "");
      return;
    }

    let frame = 0;

    const lengths = paths.map((_, i) => {
      const el = pathRefs.current[i];
      return el ? el.getTotalLength() : 0;
    });

    const write = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const span = viewport * DRAW_SPAN;

      for (let i = 0; i < paths.length; i += 1) {
        const el = pathRefs.current[i];
        if (!el) continue;

        const target = rect.top + paths[i].targetY;
        const progress = Math.min(1, Math.max(0, (viewport - target) / span));

        if (progress >= 1) {
          el.style.strokeDasharray = "none";
          el.style.strokeDashoffset = "0";
        } else {
          el.style.strokeDasharray = String(lengths[i]);
          el.style.strokeDashoffset = String(lengths[i] * (1 - progress));
        }
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(write);
    };

    write();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [paths, sectionRef]);

  return { paths, viewBox, registerPath };
}
