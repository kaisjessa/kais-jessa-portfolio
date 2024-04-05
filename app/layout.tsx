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
      <html
        data-theme="light"
        lang="en"
        style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}
      >
        <head></head>
        <body className="bg-pattern bg-base-200 ">
          {children}
          <Footer />
        </body>
      </html>
    </React.StrictMode>
  );
}
