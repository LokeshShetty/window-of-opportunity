import { ANCHOR_GAP, ARC_CLEARANCE } from "./constants";
import type { Point, RoadmapConnector, Side } from "./types";

const f = (n: number) => n.toFixed(1);

export function edgeX(r: DOMRect, side: Side): number {
  if (side === "start") return r.left;
  if (side === "middle") return r.left + r.width / 2;
  return r.right;
}

export function endpoints(
  a: DOMRect,
  b: DOMRect,
  c: RoadmapConnector,
  scale: number,
): { from: Point; to: Point } {
  const gap = Math.max(8, ANCHOR_GAP * scale);
  const room = Math.max(16, ARC_CLEARANCE * scale);
  const arriveAt = c.toSide ?? (c.shape === "arc" ? "end" : "start");
  const from = { x: edgeX(a, c.fromSide ?? "end"), y: a.bottom + gap };

  if (c.shape === "arc") {
    const clearance = arriveAt === "end" ? room : -room;
    return {
      from,
      to: { x: edgeX(b, arriveAt) + clearance, y: b.top + b.height / 2 },
    };
  }

  return {
    from,
    to: { x: edgeX(b, arriveAt), y: b.top - gap },
  };
}

export function straightPath(p: Point, q: Point): string {
  return `M ${f(p.x)} ${f(p.y)} L ${f(q.x)} ${f(q.y)}`;
}

export function arcPath(p: Point, q: Point, curve = 0.5523): string {
  const c1 = { x: p.x, y: p.y + (q.y - p.y) * curve };
  const c2 = { x: q.x + (p.x - q.x) * curve, y: q.y };

  return (
    `M ${f(p.x)} ${f(p.y)} ` +
    `C ${f(c1.x)} ${f(c1.y)}, ${f(c2.x)} ${f(c2.y)}, ${f(q.x)} ${f(q.y)}`
  );
}
