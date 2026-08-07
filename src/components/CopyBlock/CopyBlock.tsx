import { PillButton } from "@/components/PillButton/PillButton";
import styles from "./CopyBlock.module.css";
import type { CopyBlockProps } from "./types";

export function CopyBlock({
  heading,
  children,
  action,
  variant = "label",
  align = "start",
  as: Heading = "h2",
  id,
  className,
}: CopyBlockProps) {
  return (
    <div
      className={[styles.block, className].filter(Boolean).join(" ")}
      data-variant={variant}
      data-align={align}
    >
      <Heading
        id={id}
        className={
          variant === "display" ? `display ${styles.heading}` : styles.heading
        }
      >
        {heading}
      </Heading>
      <p className={styles.body}>{children}</p>
      {action ? (
        <PillButton href={action.href}>{action.label}</PillButton>
      ) : null}
    </div>
  );
}
