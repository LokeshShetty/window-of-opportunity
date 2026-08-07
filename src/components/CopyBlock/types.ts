import type { ReactNode } from "react";

export type Variant = "label" | "display";

export type CopyBlockProps = {
  heading: string;
  children: ReactNode;
  action?: { label: string; href: string };
  variant?: Variant;
  align?: "start" | "center";
  as?: "h2" | "h3";
  id?: string;
  className?: string;
};
