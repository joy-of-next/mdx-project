import type { Metadata } from "next";
import "the-new-css-reset/css/reset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joy of Next",
  description: "享受 Next.js 的乐趣",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
