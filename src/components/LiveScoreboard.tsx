"use client";

type House = {
  name: string;
  color: string;
  score: number;
};

type Props = {
  houses: House[];
};

export default function LiveScoreBoard({ houses }: Props) {
  const sorted = [...houses].sort((a, b) => b.score - a.score);

  return (
    <div
      className="
      rounded-[30px]
      border
      border-white/40
      bg-white/30
      backdrop-blur-3xl
      p-6
      shadow-xl
      "
    >
      <h2 className="text-3xl font-black text-center text-black mb-6">
        🏆 LIVE SCOREBOARD
      </h2>

      <div className="space-y-4">

        {sorted.map((house, index) => (

          <div
            key={house.name}
            className="
            flex
            items-center
            justify-between
            rounded-2xl
            bg-white/40
            px-5
            py-4
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="h-6 w-6 rounded-full"
                style={{
                  backgroundColor: house.color,
                }}
              />

              <span className="font-bold text-xl text-black">

                {index === 0 && "🥇 "}
                {index === 1 && "🥈 "}
                {index === 2 && "🥉 "}

                {house.name}

              </span>

            </div>

            <span
              className="text-3xl font-black"
              style={{
                color: house.color,
              }}
            >
              {house.score}
            </span>

          </div>

        ))}

      </div>
    </div>
  );
}