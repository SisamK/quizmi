"use client";

export default function Footer() {
  return (
    <footer className="px-4 py-8 bg-[#375534]">

      <div
        className="
        mx-auto
        max-w-7xl
        rounded-[30px]

        border
        border-white/20

        bg-white/10

        backdrop-blur-3xl

        shadow-[0_10px_40px_rgba(0,0,0,.35)]

        px-8
        py-6

        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-5
        "
      >

        {/* Quote */}

        <div className="text-center lg:text-left">

          <h3
            className="
            text-xl
            font-extrabold
            text-white
            drop-shadow-[0_0_8px_rgba(255,255,255,.25)]
            "
          >
            ✨ Learn • Think • Achieve
          </h3>

          <p
            className="
            mt-2
            italic
            text-sm
            md:text-base
            text-white/90
            font-medium
            "
          >
            "Education is not the learning of facts,
            but the training of the mind to think."
          </p>

          <p
            className="
            mt-1
            text-sm
            font-semibold
            text-white/70
            "
          >
            — Albert Einstein
          </p>

        </div>

        {/* Divider */}

        <div className="hidden lg:block h-16 w-px bg-white/20"></div>

        {/* Credit */}

        <div className="text-center lg:text-right">

          <p
            className="
            text-lg
            font-bold
            text-white
            "
          >
            KMSSM Quiz Challenge
          </p>

          <p
            className="
            mt-1
            text-white/90
            font-medium
            "
          >
            Designed & Developed with ❤️ by
          </p>

          <h2
            className="
            mt-1
            text-3xl
            font-black
            tracking-wide
            text-white
            drop-shadow-[0_0_10px_rgba(255,255,255,.25)]
            "
          >
            Sisam Khadka
          </h2>

        </div>

      </div>

    </footer>
  );
}