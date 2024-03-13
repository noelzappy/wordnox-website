import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/sections/nav-bar";
import Footer from "@/components/sections/footer";
import "react-modern-drawer/dist/index.css";

const inter = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wordnox.com",
  description: "Wordnox.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${inter.className} bg-neutral-300
      `}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
