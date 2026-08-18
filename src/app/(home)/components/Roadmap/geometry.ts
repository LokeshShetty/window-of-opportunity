import { ANCHOR_GAP, ARC_CLEARANCE } from "./constants";
import type { Point, RoadmapConnector, Side } from "./types";

// pure math: measured boxes in, svg path strings out. no DOM, no React.

const f = (n: number) => n.toFixed(1);

// turns "start" / "middle" / "end" into an x position on the word
export function edgeX(r: DOMRect, side: Side): number {
  if (side === "start") return r.left;
  if (side === "middle") return r.left + r.width / 2;
  return r.right;
}

// picks the two points the curve joins, given the two words' boxes
export function endpoints(
  a: DOMRect,
  b: DOMRect,
  c: RoadmapConnector,
  scale: number,
): { from: Point; to: Point } {
  // clearances shrink with the screen, so they don't swallow a mobile panel
  const gap = Math.max(8, ANCHOR_GAP * scale);
  const room = Math.max(16, ARC_CLEARANCE * scale);
  const arriveAt = c.toSide ?? (c.shape === "arc" ? "end" : "start");
  // every connector leaves from below its word
  const from = { x: edgeX(a, c.fromSide ?? "end"), y: a.bottom + gap };

  // an arc comes in from the side, level with the middle of the word
  if (c.shape === "arc") {
    const clearance = arriveAt === "end" ? room : -room;
    return {
      from,
      to: { x: edgeX(b, arriveAt) + clearance, y: b.top + b.height / 2 },
    };
  }

  // a straight line stops above the word and points down at it
  return {
    from,
    to: { x: edgeX(b, arriveAt), y: b.top - gap },
  };
}

export function straightPath(p: Point, q: Point): string {
  return `M ${f(p.x)} ${f(p.y)} L ${f(q.x)} ${f(q.y)}`;
}

// a quarter turn: leaves straight down, arrives sideways.
// 0.5523 is the value that makes a bezier match a real circle.
export function arcPath(p: Point, q: Point, curve = 0.5523): string {
  const c1 = { x: p.x, y: p.y + (q.y - p.y) * curve };
  const c2 = { x: q.x + (p.x - q.x) * curve, y: q.y };

  return (
    `M ${f(p.x)} ${f(p.y)} ` +
    `C ${f(c1.x)} ${f(c1.y)}, ${f(c2.x)} ${f(c2.y)}, ${f(q.x)} ${f(q.y)}`
  );
}
