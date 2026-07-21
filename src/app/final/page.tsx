"use client";

import WinnerBoard from "../game/components/WinnerBoard";


const houseData = [
  {
    id: "red" as const,
    name: "Red House",
    color: "#ff0800",
  },
  {
    id: "blue" as const,
    name: "Blue House",
    color: "#0AFFFF",
  },
  {
    id: "green" as const,
    name: "Green House",
    color: "#37fd12",
  },
  {
    id: "yellow" as const,
    name: "Yellow House",
    color: "#ffef00",
  },
];


export default function FinalPage() {


  const scores = {
    red: 120,
    blue: 90,
    green: 70,
    yellow: 50,
  };


  return (

    <WinnerBoard

      scores={scores}

      houseData={houseData}

      onRestart={() => {
        window.location.href = "/game";
      }}

    />

  );

}
