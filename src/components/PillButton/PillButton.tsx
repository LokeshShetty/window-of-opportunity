import styles from "./PillButton.module.css";
import type { PillButtonProps } from "./types";

export function PillButton({
  children,
  href,
  variant = "brand",
  size = "md",
  className,
}: PillButtonProps) {
  return (
    <a
      href={href}
      className={[styles.pill, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </a>
  );
}
