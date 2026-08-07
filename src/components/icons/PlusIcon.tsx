import type { IconProps } from "./types";

export function PlusIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M9.83594 4V15.6667"
        stroke="currentColor"
        strokeOpacity="0.9"
        strokeLinejoin="round"
      />
      <path
        d="M4 9.83594H15.6667"
        stroke="currentColor"
        strokeOpacity="0.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}
