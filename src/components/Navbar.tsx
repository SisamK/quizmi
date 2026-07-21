"use client";

import Link from "next/link";
import { GraduationCap, Home, LogOut } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 px-4">

      <nav
        className="
        mx-auto
        max-w-7xl

        rounded-[30px]

        border
        border-white/40

        bg-gradient-to-r
        from-[#FED7B8]/90
        to-[#59171B]/90

        backdrop-blur-3xl

        shadow-[0_12px_40px_rgba(89,23,27,.35)]

        px-6
        py-4

        transition-all
        duration-500
        "
      >

        <div className="flex items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-4"
          >

            <div
              className="
              h-14
              w-14

              rounded-full

              bg-white/30

              backdrop-blur-2xl

              border
              border-white/50

              flex
              items-center
              justify-center

              shadow-[0_0_25px_rgba(255,255,255,.35)]
              "
            >
              <GraduationCap
                size={30}
                className="text-[#59171B]"
              />
            </div>

            <div>

              <h1 className="text-2xl font-black text-[#59171B]">
                 Quiz Contest 2083
              </h1>

              <p className="text-sm font-medium text-[#3A0D10]">
                Shree Narainapur Basic School
              </p>

            </div>

          </Link>

          {/* Navigation */}

          <div className="flex items-center gap-4">

            {/* Home */}

            <Link
              href="/"
              className="
              flex
              items-center
              gap-2

              rounded-full

              px-6
              py-3

              border
              border-white/40

              bg-white/25

              backdrop-blur-2xl

              font-bold
              text-[#2B080A]

              transition-all
              duration-300

              hover:scale-105

              hover:bg-white/40

              hover:shadow-[0_0_30px_rgba(255,255,255,.7)]

              active:scale-95
              "
            >
              <Home size={18} />
              Home
            </Link>

            {/* Panda */}

            <button
              className="
              h-14
              w-14

              rounded-full

              border
              border-white/50

              bg-white/30

              backdrop-blur-3xl

              text-3xl

              transition-all
              duration-300

              hover:scale-110
              hover:rotate-6

              hover:bg-white/45

              hover:shadow-[0_0_45px_rgba(255,255,255,.85)]

              active:scale-95

              animate-pulse
              "
            >
              🐼
            </button>

            {/* Quit */}

            <Link
              href="/"
              className="
              flex
              items-center
              gap-2

              rounded-full

              px-6
              py-3

              border
              border-white/40

              bg-white/25

              backdrop-blur-2xl

              font-bold
              text-[#2B080A]

              transition-all
              duration-300

              hover:scale-105

              hover:bg-white/40

              hover:shadow-[0_0_30px_rgba(255,255,255,.7)]

              active:scale-95
              "
            >
              <LogOut size={18} />
              Quit
            </Link>

          </div>

        </div>

      </nav>

    </header>
  );
}