"use client";


type House = {
  id: "red" | "blue" | "green" | "yellow";
  name: string;
  color: string;
};


type Props = {

  scores: {
    red:number;
    blue:number;
    green:number;
    yellow:number;
  };

  houseData: readonly House[];

  onRestart: ()=>void;

};




export default function WinnerBoard({

  scores,

  houseData,

  onRestart,

}:Props){



  const ranking =

    Object.entries(scores)

    .sort(
      (a,b)=>b[1]-a[1]
    );





  const winner =

    houseData.find(

      (house)=>

      house.id === ranking[0][0]

    );





  const winnerAvatar = {

    red: "🌺",

    blue: "❄️",

    green: "🦋",

    yellow: "🌻",

  }[winner?.id ?? "red"];







  return (

    <main

      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-yellow-300
      to-orange-500
      p-6
      "

    >



      <div

        className="
        w-full
        max-w-4xl
        rounded-[45px]
        bg-white/40
        backdrop-blur-3xl
        border
        border-white/60
        p-12
        text-center
        shadow-2xl
        "

      >





        <h1

          className="
          text-6xl
          font-black
          "

        >

          🏆 WINNER 🏆

        </h1>









        {/* WINNER AVATAR */}


        <div

          className="
          mt-8
          flex
          justify-center
          "

        >


          <div

            className="
            text-[150px]
            winner-avatar
            "

          >

            {winnerAvatar}


          </div>


        </div>









        {/* WINNER HOUSE */}



        <div

          className="
          mt-6
          rounded-[40px]
          p-10
          "

          style={{

            backgroundColor:
            winner?.color

          }}

        >



          <h2

            className="
            text-5xl
            font-black
            "

          >

            {winner?.name}

          </h2>




          <p

            className="
            mt-5
            text-7xl
            font-black
            "

          >

            {ranking[0][1]}

          </p>




          <p

            className="
            text-xl
            font-bold
            "

          >

            POINTS

          </p>



        </div>









        {/* FINAL RANKING */}



        <h2

          className="
          mt-12
          text-3xl
          font-black
          "

        >

          FINAL RANKING

        </h2>






        <div

          className="
          mt-6
          space-y-4
          "

        >


        {

          ranking.map(

            ([id,score],index)=>{


              const house =

              houseData.find(

                h=>h.id===id

              );




              return (

                <div

                  key={id}

                  className="
                  rounded-3xl
                  p-5
                  text-2xl
                  font-black
                  "

                  style={{

                    backgroundColor:
                    house?.color,


                    color:

                    house?.id==="red"

                    ?

                    "white"

                    :

                    "black"

                  }}

                >

                  {index+1} 🏅

                  {" "}

                  {house?.name}

                  {" - "}

                  {score}

                  {" "}pts


                </div>


              );


            }

          )

        }


        </div>









        <button

          onClick={onRestart}

          className="
          mt-12
          rounded-full
          bg-black
          text-white
          px-14
          py-5
          text-xl
          font-black
          hover:scale-105
          transition
          "

        >

          PLAY AGAIN 🚀

        </button>





      </div>



    </main>

  );

}