import type { RoadmapConnector, RoadmapPanel } from "./types";

export const roadmapPanels: RoadmapPanel[] = [
  {
    id: "talking",
    src: "/images/roadmap-1.svg",
    color: "linear-gradient(#335d81, #034181)",
    lines: [
      {
        id: "l1",
        tokens: ["Your", "body", { gap: true }, "is", "talking"],
        gap: 40,
        x: 50,
        y: 50,
      },
    ],
  },
  {
    id: "but-most",
    src: "/images/roadmap-2.svg",
    color: "linear-gradient(#021780, #020f69)",
    lines: [
      {
        id: "l2",
        tokens: ["Your", "body", { gap: true }, "is", "talking"],
        gap: 40,
        x: 49,
        y: 35,
      },
      { id: "l3", tokens: ["But", "most"], x: 35, y: 74, gap: 40 },
    ],
  },
  {
    id: "not-listening",
    src: "/images/roadmap-3.svg",
    color: "linear-gradient(#021780, #020f69)",
    lines: [
      { id: "l4", tokens: ["Health", "systems"], x: 62, y: 35, gap: 40 },
      { id: "l5", tokens: ["aren't", "listening"], x: 50, y: 65, gap: 40 },
    ],
  },
  {
    id: "we-built-one",
    src: "/images/roadmap-4.svg",
    color: "linear-gradient(#120101, #4f1811)",
    lines: [
      {
        id: "l6",
        tokens: ["So", "we", "built", "one", "that", "has"],
        x: 50,
        y: 50,
      },
    ],
  },
  {
    id: "informed",
    src: "/images/roadmap-5.svg",
    color: "linear-gradient(#b7441d, #ba5319)",
    lines: [
      { id: "l7", tokens: ["Every", "insight", "informed"], x: 57, y: 35 },
      { id: "l8", tokens: ["by", "what", "comes", "next"], x: 40, y: 65 },
    ],
  },
  {
    id: "compounds",
    src: "/images/roadmap-6.svg",
    color: "linear-gradient(#aca083, #a09579)",
    lines: [
      {
        id: "l9",
        tokens: [
          "Where",
          "every",
          "session",
          "compounds",
          { gap: true },
          "on",
          "the",
          "last",
        ],
        x: 50,
        y: 50,
      },
    ],
  },
  {
    id: "physiology",
    src: "/images/roadmap-7.svg",
    color: "linear-gradient(#ad2c05, #c04606)",
    lines: [
      {
        id: "l10",
        tokens: ["Shaped", "by", "your", "physiology"],
        x: 50,
        y: 50,
      },
    ],
  },
];

export const roadmapConnectors: RoadmapConnector[] = [
  {
    from: "l2",
    to: "l3",
    shape: "arc",
    fromWord: -1,
    fromSide: "middle",
    toSide: "end",
    curve: 0.6,
  },
  {
    from: "l3",
    to: "l4",
    shape: "line",
    fromWord: -1,
    fromSide: "start",
    toWord: -1,
    toSide: "start",
  },
  {
    from: "l7",
    to: "l8",
    shape: "line",
    fromWord: 1,
    fromSide: "middle",
    toWord: [1, 2],
    toSide: "middle",
  },
];
