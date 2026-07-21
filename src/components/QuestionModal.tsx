"use client";

import questions from "../data/questions.json";


type House = {
  id: "red" | "blue" | "green" | "yellow";
  name: string;
  color: string;
};


type Props = {

  selectedQuestion: number | null;

  answerRevealed: boolean;

  setAnswerRevealed: (value:boolean)=>void;

  awarded: string[];

  houseData: readonly House[];

  givePoints: (houseId:string)=>void;

  finishQuestion: ()=>void;

};



export default function QuestionModal({

  selectedQuestion,

  answerRevealed,

  setAnswerRevealed,

  awarded,

  houseData,

  givePoints,

  finishQuestion,

}:Props){



  if(selectedQuestion === null){

    return (

      <section

        className="
        rounded-[36px]
        border
        border-white/60
        bg-white/25
        backdrop-blur-3xl
        p-8
        "

      >

        <h2 className="
        text-4xl
        font-black
        text-center
        ">

          SELECT QUESTION

        </h2>


      </section>

    );

  }





  const currentQuestion =
    questions.find(
      (q)=>q.id === selectedQuestion
    );






  return (

    <section

      className="
      rounded-[36px]
      border
      border-white/60
      bg-white/25
      backdrop-blur-3xl
      p-8
      "

    >



      <h2

        className="
        text-4xl
        font-black
        "

      >

        QUESTION {selectedQuestion}

      </h2>







      <div

        className="
        mt-8
        rounded-3xl
        bg-white
        p-8
        "

      >


        <p

          className="
          text-2xl
          font-bold
          "

        >

          {currentQuestion?.question}

        </p>


      </div>







      {!answerRevealed && (

        <button

          onClick={()=>
            setAnswerRevealed(true)
          }

          className="
          mt-8
          rounded-full
          bg-orange-600
          text-white
          px-10
          py-4
          text-xl
          font-black
          "

        >

          REVEAL ANSWER

        </button>


      )}








      {answerRevealed && (

        <>


          <div

            className="
            mt-8
            rounded-3xl
            bg-green-100
            p-6
            "

          >


            <h3

              className="
              text-2xl
              font-black
              "

            >

              CORRECT ANSWER

            </h3>



            <p

              className="
              text-3xl
              font-bold
              mt-3
              "

            >

              {currentQuestion?.answer}

            </p>


          </div>









          <div

            className="
            grid
            md:grid-cols-2
            gap-5
            mt-8
            "

          >



          {

            houseData.map((house)=>{


              const done =
              awarded.includes(house.id);




              return (

                <button

                  key={house.id}

                  disabled={done}

                  onClick={()=>
                    givePoints(house.id)
                  }


                  className="
                  rounded-3xl
                  p-6
                  text-xl
                  font-black
                  hover:scale-105
                  transition
                  "

                  style={{

                    backgroundColor:
                    house.color,


                    color:
                    house.id==="red"
                    ?
                    "white"
                    :
                    "black",


                    opacity:
                    done
                    ?
                    0.5
                    :
                    1

                  }}

                >


                  {
                    done
                    ?
                    "✅ AWARDED"
                    :
                    `${house.name} +10`
                  }



                </button>

              );


            })

          }


          </div>









          <button

            onClick={finishQuestion}


            className="
            mt-8
            rounded-full
            bg-black
            text-white
            px-12
            py-4
            text-xl
            font-black
            "

          >

            FINISH QUESTION

          </button>




        </>

      )}





    </section>

  );

}
