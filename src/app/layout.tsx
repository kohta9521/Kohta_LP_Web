import type { Metadata } from "next";
import { Inter } from "next/font/google";

// scss
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web制作 | LP制作 | デザイン制作 | お問い合わせ",
  description: "Web制作、LP制作、デザイン制作、お問い合わせはこちら。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
