import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Detail Maker MVP",
  description: "1인용 상세페이지 메이커",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-zinc-50 text-zinc-900 antialiased">{children}</body>
    </html>
  );
}