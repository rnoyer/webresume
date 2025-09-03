import type { Metadata } from "next";
import { Funnel_Sans, Funnel_Display } from "next/font/google";
import "./globals.css";

const FunnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

const FunnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Resume",
  description: "Romain's web resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FunnelSans.variable} ${FunnelDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
