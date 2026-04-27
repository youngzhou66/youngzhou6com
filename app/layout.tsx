import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "zhou feng | AI Coding 实践者",
  description: "Personal portfolio showcasing my creative work and projects",
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
