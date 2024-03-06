import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/sections/footer";
import { NavBar } from "@/components/nav-bar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Wordnox",
  description: "Wordnox.com",
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
          "min-h-screen bg-background font-sans antialiased scroll-smooth",
          fontSans.variable
        )}
      >
        <NavBar className="bg-yellow-50 border-none" />
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
