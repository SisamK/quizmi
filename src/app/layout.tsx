import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SIS Mathematics Quiz",
  description: "Interactive Mathematics Quiz Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${nunito.className}
          min-h-screen
          text-black
          bg-gradient-to-br
          from-pink-100
          via-sky-50
          to-teal-100
          overflow-x-hidden
        `}
         style={{
    color: "#B03060", // Dark Pink
  }}
      >
        {/* Floating background blobs */}

        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-pink-300/25 blur-3xl animate-pulse" />

          <div className="absolute top-40 right-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl animate-pulse" />

          <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-white/40 blur-3xl" />

          <div className="absolute bottom-24 right-20 h-60 w-60 rounded-full bg-teal-200/25 blur-3xl animate-pulse" />
        </div>

        <Navbar />

        <main
          className="
            relative
            z-10
            w-full
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            md:px-8
            lg:px-12
            py-6
            sm:py-8
            lg:py-12
          "
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}