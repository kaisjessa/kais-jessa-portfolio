import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import React from "react";
import { Suspense } from "react";

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
        <body className="bg-pattern">
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-lg"></span>
            }
          >
            <Header />
            {children}
            <Footer />
          </Suspense>
        </body>
      </html>
    </React.StrictMode>
  );
}
