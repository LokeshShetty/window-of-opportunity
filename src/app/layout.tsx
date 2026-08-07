import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Saira } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body-local",
  subsets: ["latin"],
  display: "swap",
});

const display = Saira({
  variable: "--font-display-local",
  subsets: ["latin"],
  axes: ["wdth"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Window of Opportunity",
  description: "Ultrahuman Window of Opportunity",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${body.variable} ${display.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
