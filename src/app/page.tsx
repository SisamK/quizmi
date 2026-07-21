"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const houses = [
  {
    name: "Red House",
    emoji: "❤️",
    glow: "hover:shadow-[0_0_30px_rgba(239,68,68,.45)]",
  },
  {
    name: "Blue House",
    emoji: "💙",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,.45)]",
  },
  {
    name: "Green House",
    emoji: "💚",
    glow: "hover:shadow-[0_0_30px_rgba(34,197,94,.45)]",
  },
  {
    name: "Yellow House",
    emoji: "💛",
    glow: "hover:shadow-[0_0_30px_rgba(250,204,21,.45)]",
  },
];

export default function HomePage() {
  return (
    <main
      className="
      relative
      overflow-hidden
      min-h-screen
      flex
      items-center
      justify-center
      px-4
      py-10

      bg-gradient-to-br
      from-pink-100
      via-sky-100
      to-cyan-100
    "
    >
      {/* Floating Glass Bubbles */}

      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute top-10 left-12 h-36 w-36 rounded-full bg-white/30 backdrop-blur-xl"
      />

      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute right-12 top-28 h-48 w-48 rounded-full bg-sky-200/30 backdrop-blur-xl"
      />

      <motion.div
        animate={{ x: [-10, 15, -10] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute bottom-16 left-1/4 h-28 w-28 rounded-full bg-pink-200/30 backdrop-blur-xl"
      />

      <motion.div
        animate={{ x: [15, -15, 15] }}
        transition={{ repeat: Infinity, duration: 9 }}
        className="absolute bottom-24 right-24 h-20 w-20 rounded-full bg-white/40 backdrop-blur-xl"
      />

      {/* Clouds */}

      <motion.div
        animate={{ x: [-20, 20, -20] }}
        transition={{ repeat: Infinity, duration: 18 }}
        className="absolute top-16 left-1/3 text-7xl opacity-50"
      >
        ☁️
      </motion.div>

      <motion.div
        animate={{ x: [20, -20, 20] }}
        transition={{ repeat: Infinity, duration: 20 }}
        className="absolute bottom-20 right-1/4 text-6xl opacity-40"
      >
        ☁️
      </motion.div>

      {/* Glass Card */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative
          z-10
          w-full
          max-w-6xl
          rounded-[40px]
          border
          border-white/50
          bg-white/25
          backdrop-blur-3xl
          shadow-[0_20px_60px_rgba(255,255,255,.45),0_15px_35px_rgba(0,0,0,.08)]
          p-6
          sm:p-10
          lg:p-14
        "
      >
        {/* Logo */}

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-center text-7xl"
        >
          🎓
        </motion.div>

        {/* Heading */}

        <h1 className="mt-6 text-center text-4xl sm:text-5xl lg:text-6xl font-black text-black">
          Welcome Students!
        </h1>

        <p className="mt-6 text-center text-xl sm:text-2xl font-bold text-gray-900">
          Ready for Today's Exciting House Challenge?
        </p>

        <p className="mt-3 max-w-2xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
          Test your knowledge, solve exciting questions,
          earn points and lead your house to victory.
        </p>

        {/* House Cards */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {houses.map((house) => (
            <motion.div
              key={house.name}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className={`
                rounded-[28px]
                border
                border-white/60
                bg-white/35
                backdrop-blur-2xl
                shadow-lg
                transition-all
                duration-300
                ${house.glow}
                p-7
                text-center
              `}
            >
              <div className="text-5xl">{house.emoji}</div>

              <h2 className="mt-4 text-xl font-bold text-black">
                {house.name}
              </h2>
            </motion.div>
          ))}
        </div>

        {/* Button */}

        <div className="text-center mt-16">
          <Link href="/rules">
            <motion.button
              whileHover={{
                scale: 1.07,
              }}
              whileTap={{
                scale: 0.94,
              }}
              className="
                inline-flex
                items-center
                gap-3

                rounded-full

                border
                border-teal-200

                bg-white/35

                backdrop-blur-3xl

                px-12
                py-5

                text-xl
                font-bold
                text-black

                shadow-[0_0_20px_rgba(45,212,191,.35)]

                hover:shadow-[0_0_50px_rgba(45,212,191,.8)]

                active:shadow-[0_0_70px_rgba(45,212,191,1)]

                transition-all
                duration-300
              "
            >
              <Play size={24} />

              Let's Play
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}