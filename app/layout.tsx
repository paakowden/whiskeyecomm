import type { Metadata } from "next";
//import localFont from "next/font/local";
import { Poppins as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import React from "react";

//<body
//       className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//     ></body>
//const geistSans = localFont({
// src: "./fonts/GeistVF.woff",
//variable: "--font-geist-sans",
// weight: "100 900",
//});
//const geistMono = localFont({
// src: "./fonts/GeistMonoVF.woff",
//variable: "--font-geist-mono",
// weight: "100 900",
//});

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Whiskey",
  description: "Africa's Finest Whiskey",
  icons: { icon: "/assets/icons/logo.jpeg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
