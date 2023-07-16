"use client";

import { Footer } from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
// import { fontPoppinReturn } from "./utils/util";
const poppins = Poppins({ weight: "500", subsets: ["latin"], style: "normal" });

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="wrapper">
          {path === "/" ? (
            <Hero>
              <Header />
            </Hero>
          ) : (
            <Header fill="#212121" />
          )}

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
