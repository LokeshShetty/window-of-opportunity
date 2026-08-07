export type Token = string | { gap: true };

export type Side = "start" | "middle" | "end";

export type RoadmapLine = {
  id: string;
  tokens: Token[];
  x: number;
  y: number;
  gap?: number;
};

export type RoadmapConnector = {
  from: string;
  to: string;
  shape: "arc" | "line";
  fromSide?: Side;
  toSide?: Side;
  fromWord?: number | [number, number];
  toWord?: number | [number, number];
  curve?: number;
};

export type RoadmapPanel = {
  id: string;
  src: string;
  color: string;
  lines: RoadmapLine[];
};

export type Point = { x: number; y: number };

export type ConnectorPath = { d: string; targetY: number };

export type PanelProps = {
  panel: RoadmapPanel;
  first: boolean;
  wordOffset: number;
  wordTotal: number;
  registerLine: (id: string, el: HTMLSpanElement | null) => void;
};
