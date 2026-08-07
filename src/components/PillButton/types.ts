import type { ReactNode } from "react";

export type Variant = "brand" | "glass" | "light";

export type Size = "sm" | "md";

export type PillButtonProps = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
};
