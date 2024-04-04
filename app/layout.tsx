import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import React from "react";
import { Suspense } from "react";
import Background from "./components/background";

export const metadata: Metadata = {
  title: "Kais Jessa",
  description: "Kais Jessa's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.StrictMode>
      <html data-theme="light" lang="en">
        <head></head>
        <body>
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-lg"></span>
            }
          >
            <Background />
            <Header />
            {children}
            <Footer />
          </Suspense>
        </body>
      </html>
    </React.StrictMode>
  );
}
