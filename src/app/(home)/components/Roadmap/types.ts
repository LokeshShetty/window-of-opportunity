// a line is words plus the short rules drawn between them
export type Token = string | { gap: true };

// which part of a word a connector attaches to
export type Side = "start" | "middle" | "end";

// x and y are percentages of the panel, so the words hold their spot at any width
export type RoadmapLine = {
  id: string;
  tokens: Token[];
  x: number;
  y: number;
  gap?: number;
};

// names the two words to join; never says where they are on screen
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

// d is the curve to draw, targetY is where it ends — used to time the draw
export type ConnectorPath = { d: string; targetY: number };

export type PanelProps = {
  panel: RoadmapPanel;
  first: boolean;
  wordOffset: number;
  wordTotal: number;
  registerLine: (id: string, el: HTMLSpanElement | null) => void;
};
