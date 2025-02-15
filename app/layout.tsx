import type { Metadata } from "next";
import {  Raleway } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
const raleway = Raleway({
  weight: "400",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Shovon Roy Shuvro",
  description: "Shovon Roy Shuvro - Full Stack Web Developer",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} bg-[#030014] overflow-y-scroll overflow-x-hidden `}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
