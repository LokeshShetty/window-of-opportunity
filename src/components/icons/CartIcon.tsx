import type { IconProps } from "./types";

export function CartIcon({ size = 32, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="6.7793"
        y="10.334"
        width="18.4444"
        height="16.6667"
        rx="3.71795"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20.8891 10.2231C20.8891 7.03211 18.7003 4.44531 16.0002 4.44531C13.3002 4.44531 11.1113 7.03211 11.1113 10.2231"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
