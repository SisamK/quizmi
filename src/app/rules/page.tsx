"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const rules = [
  "FOUR HOUSES WILL COMPETE: RED, BLUE, GREEN AND YELLOW.",
  "CHOOSE ANY QUESTION NUMBER FROM 1 TO 52.",
  "EACH CORRECT ANSWER EARNS 10 POINTS.",
  "DISCUSS WITH YOUR TEAMMATES BEFORE ANSWERING.",
  "REMEMBER TODAY'S QUESTIONS FOR FUTURE LEARNING.",
  "A LIVE SCOREBOARD WILL STAY VISIBLE THROUGHOUT THE GAME.",
  "AFTER QUESTION 52, THE CHAMPION HOUSE AND RUNNER-UP HOUSES WILL BE ANNOUNCED."
];

export default function RulesPage() {
  return (
    <main className="min-h-[85vh] flex items-center justify-center px-4 py-8">

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="
          w-full
          max-w-6xl
          rounded-[36px]
          border
          border-white/50
          bg-white/25
          backdrop-blur-3xl
          shadow-[0_10px_50px_rgba(255,255,255,.35),0_8px_30px_rgba(0,0,0,.08)]
          p-6
          sm:p-10
          lg:p-14
        "
      >

        {/* HEADER */}

        <motion.div
          animate={{ y: [0,-5,0] }}
          transition={{
            repeat: Infinity,
            duration: 3
          }}
          className="text-center"
        >

          <div className="text-6xl">
            📜
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-black">
            GAME RULES
          </h1>

          <p className="mt-4 text-lg sm:text-xl font-bold uppercase text-black">
            READ THE RULES CAREFULLY BEFORE STARTING TODAY'S CHALLENGE.
          </p>

        </motion.div>

        {/* RULES */}

        <div className="mt-12 space-y-5">

          {rules.map((rule, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale:1.02,
                x:6
              }}
              className="
                flex
                items-start
                gap-5

                rounded-[24px]

                border
                border-white/50

                bg-gradient-to-r
                from-[#EB975E]/90
                via-[#F6C69D]/85
                to-[#FAF7E8]/95

                backdrop-blur-3xl

                shadow-[0_8px_25px_rgba(235,151,94,.30)]

                p-6

                transition-all
                duration-300

                hover:shadow-[0_0_35px_rgba(235,151,94,.65)]
              "
            >

              <div className="text-3xl shrink-0">
                {index + 1}️⃣
              </div>

              <p className="text-lg font-black uppercase text-black leading-relaxed">
                {rule}
              </p>

            </motion.div>

          ))}

        </div>

        {/* GOOD LUCK */}

        <motion.div

          whileHover={{
            scale:1.02
          }}

          className="
            mt-12

            rounded-[30px]

            border
            border-white/50

            bg-gradient-to-r
            from-[#EB975E]/85
            via-[#F7CFA7]/80
            to-[#FAF7E8]/90

            backdrop-blur-3xl

            p-8

            shadow-[0_0_35px_rgba(235,151,94,.35)]

            text-center
          "
        >

          <BookOpen
            size={44}
            className="mx-auto text-black"
          />

          <h2 className="mt-4 text-3xl font-black uppercase text-black">
            BEST OF LUCK!
          </h2>

          <p className="mt-4 text-lg font-black uppercase text-black">
            WORK TOGETHER, THINK CAREFULLY, SOLVE CONFIDENTLY
            AND MAKE YOUR HOUSE PROUD.
          </p>

        </motion.div>

        {/* BUTTONS */}

        <div
          className="
          mt-14

          flex
          flex-col
          sm:flex-row

          gap-5

          justify-between
        "
        >

          <Link
            href="/"
            className="w-full sm:w-auto"
          >

            <motion.button

              whileHover={{
                scale:1.05
              }}

              whileTap={{
                scale:.95
              }}

              className="
                w-full

                flex
                items-center
                justify-center
                gap-2

                rounded-full

                border
                border-white/50

                bg-white/40

                backdrop-blur-3xl

                px-8
                py-4

                font-black
                uppercase
                text-black

                shadow-lg

                hover:shadow-[0_0_35px_rgba(217,82,4,.45)]

                transition-all
              "
            >

              <ArrowLeft size={20} />

              BACK

            </motion.button>

          </Link>

          <Link
            href="/game"
            className="w-full sm:w-auto"
          >

            <motion.button

              whileHover={{
                scale:1.05
              }}

              whileTap={{
                scale:.95
              }}

              className="
                w-full

                flex
                items-center
                justify-center
                gap-2

                rounded-full

                bg-[#D95204]

                border
                border-[#D95204]

                backdrop-blur-3xl

                px-10
                py-4

                font-black
                uppercase
                text-black

                shadow-[0_0_20px_rgba(217,82,4,.35)]

                hover:shadow-[0_0_45px_rgba(217,82,4,.8)]

                transition-all
              "
            >

              START GAME

              <ArrowRight size={20} />

            </motion.button>

          </Link>

        </div>

      </motion.div>

    </main>
  );
}