import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhananjai Pratap Singh | Portfolio",
  description: "Dhananjai Pratap Singh - Full Stack Intern & IoT Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased selection:bg-sky-200 selection:text-sky-900 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
