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
    <html
      data-theme="light"
      lang="en"
      style={{ scrollBehavior: "smooth", scrollPaddingTop: "5.5em" }}
    >
      <head></head>
      <body className="bg-pattern">
        {children}
        <Footer />
      </body>
    </html>
  );
}
