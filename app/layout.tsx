import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOL 智能分组",
  description: "LOL 自动分组工具 - 根据 ELO 智能平衡双方实力",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
