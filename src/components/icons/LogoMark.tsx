import type { IconProps } from "./types";

export function LogoMark({ size = 32, className }: IconProps) {
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
      <path
        d="M24.8387 7.9248H7.16213V14.1513H10.7108L4.78516 19.4698L9.13735 24.0748L15.967 18.0429L22.8635 24.0748L27.2157 19.4698L21.2565 14.1513H24.8387V7.9248Z"
        fill="currentColor"
      />
    </svg>
  );
}
