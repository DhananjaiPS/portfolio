import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import "./globals.css";
// ✅ Import the new component
import VisitorCounterModal from "@/components/VisitorCounterModal"; 

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased selection:bg-sky-200 selection:text-sky-900 overflow-x-hidden`}
      >
        {/* 🔥 Visitor Counter Modal */}
        <VisitorCounterModal />

        {/* Your Website Content */}
        {children}

        {/* 🔥 Toast Notifications */}
        <Toaster position="top-right" />

        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FCNBYCGH5T"
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FCNBYCGH5T', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}