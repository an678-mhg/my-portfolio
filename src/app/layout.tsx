import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyễn Quốc An - Frontend Developer",
  description:
    "Portfolio của Nguyễn Quốc An - Frontend Developer với hơn 2 năm kinh nghiệm trong ReactJS và các công nghệ web hiện đại",
  keywords:
    "Frontend Developer, ReactJS, Next.js, TypeScript, Portfolio, Web Developer",
  authors: [{ name: "Nguyễn Quốc An" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Nguyễn Quốc An - Frontend Developer",
    description: "Portfolio của Frontend Developer với hơn 2 năm kinh nghiệm",
    type: "website",
    locale: "vi_VN",
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
