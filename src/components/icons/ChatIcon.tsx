import type { IconProps } from "./types";

export function ChatIcon({ size = 28, className }: IconProps) {
  return (
    <svg
      /* 31 x 28 — non-square, so height drives the size and width follows the
         intrinsic ratio rather than being forced into a square box. */
      width={(size * 31) / 28}
      height={size}
      viewBox="0 0 31 28"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5.30641 28C6.87214 28 10.5025 26.4287 12.9433 24.7656C13.2057 24.5804 13.408 24.5296 13.6296 24.5296C13.8625 24.5504 14.0754 24.5642 14.2791 24.5642C23.5489 24.5546 30.4291 19.4719 30.4291 12.2805C30.4291 5.4814 23.6692 0 15.218 0C6.75985 0 0 5.4814 0 12.2805C0 16.4891 2.51263 20.2907 6.79964 22.5912C7.06472 22.7321 7.12892 22.9284 6.99777 23.1838C6.25604 24.4247 5.06764 25.7886 4.5402 26.4514C3.93843 27.2084 4.25984 28 5.30641 28Z"
        fill="currentColor"
      />
    </svg>
  );
}
