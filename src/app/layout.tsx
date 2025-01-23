"use client";

// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
// import { useState } from "react";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const disableNavbarComponent = ["/login", "/register"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [count, setCount] = useState(0);
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!disableNavbarComponent.includes(pathname) && <Navbar />}
        {/* <div>Layout {count}</div> */}
        {/* <button
          className="bg-red-500 p-2 text-white rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Klik
        </button> */}
        {children}
      </body>
    </html>
  );
}
