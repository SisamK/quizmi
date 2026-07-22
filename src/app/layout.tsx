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
  title: "SIS Quiz",
  description: "Interactive Quiz Challenge",
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
          overflow-y-auto
          bg-gradient-to-br
          from-pink-100
          via-sky-50
          to-teal-100
        `}
        style={{
          color: "#B03060",
        }}
      >

        {/* Background blobs */}

        <div className="fixed inset-0 -z-10 overflow-hidden">

          <div
            className="
              absolute
              -top-32
              -left-24
              h-96
              w-96
              rounded-full
              bg-pink-300/25
              blur-3xl
              animate-pulse
            "
          />

          <div
            className="
              absolute
              top-40
              right-10
              h-80
              w-80
              rounded-full
              bg-cyan-300/20
              blur-3xl
              animate-pulse
            "
          />

          <div
            className="
              absolute
              bottom-10
              left-1/3
              h-72
              w-72
              rounded-full
              bg-white/40
              blur-3xl
            "
          />

        </div>


        <div className="min-h-screen flex flex-col">

          <Navbar />


          <main
            className="
              relative
              z-10
              w-full
              flex-1
              px-6
              py-4
            "
          >

            <div
              className="
                w-full
                min-h-full
                max-w-[2200px]
                mx-auto
              "
            >

              {children}

            </div>

          </main>


          <Footer />

        </div>


      </body>
    </html>
  );
}
