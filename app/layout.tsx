import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
    </React.StrictMode>
  );
}
