"use client";

const TOTAL_QUESTIONS = 52;


type Props = {
  usedQuestions: number[];
  selectedQuestion: number | null;
  onSelectQuestion: (question:number)=>void;
};



export default function QuestionGrid({

  usedQuestions,
  selectedQuestion,
  onSelectQuestion,

}:Props){


  return (

    <section

      className="
      rounded-[36px]
      border
      border-white/60
      bg-white/25
      backdrop-blur-3xl
      p-6
      "

    >



      <h2

        className="
        text-3xl
        font-black
        mb-6
        uppercase
        "

      >

        QUESTIONS

      </h2>





      <div

        className="
        grid
        grid-cols-4
        gap-4
        "

      >



      {
        Array.from({
          length:TOTAL_QUESTIONS

        }).map((_,index)=>{


          const number =
          index + 1;



          const used =
          usedQuestions.includes(number);



          const active =
          selectedQuestion === number;





          return (

            <button


              key={number}


              disabled={used}



              onClick={()=>
                onSelectQuestion(number)
              }



              className={`

              h-16

              rounded-2xl

              font-black

              text-xl

              transition-all

              duration-300


              ${
                used

                ?

                "bg-gray-400 text-white"

                :

                active

                ?

                "bg-orange-500 text-white scale-105"

                :

                "bg-white hover:bg-orange-200 hover:scale-105"

              }

              `}


            >

              {number}


            </button>


          );


        })

      }


      </div>


    </section>

  );


}