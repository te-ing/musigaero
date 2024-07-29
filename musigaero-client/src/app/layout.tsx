import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "무지개로: 반려동물 부고 알림",
  description: "마지막 인사를 전하는 곳, 무지개로입니다 🌈",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} flex justify-center bg-slate-200`}>
        <div className="w-full max-w-xl bg-white h-screen" aria-label="모바일 wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
