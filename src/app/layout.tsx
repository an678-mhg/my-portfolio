import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyen Quoc An - Frontend Developer",
  description:
    "Portfolio of Nguyen Quoc An - Frontend Developer with more than 2 years of experience in ReactJS and modern web technologies",
  keywords:
    "Frontend Developer, ReactJS, Next.js, TypeScript, Portfolio, Web Developer",
  authors: [{ name: "Nguyen Quoc An" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Nguyễn Quốc An - Frontend Developer",
    description: "Portfolio của Frontend Developer với hơn 2 năm kinh nghiệm",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/ng-quoc-an.JPG",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
