"use client";

import { useState } from "react";
import { questions} from "@/src/data/questions";


const TOTAL_QUESTIONS = 52;


const houseData = [
  {
    id: "red",
    name: "Red House",
    color: "#ff0800",
  },
  {
    id: "blue",
    name: "Blue House",
    color: "#0AFFFF",
  },
  {
    id: "green",
    name: "Green House",
    color: "#37fd12",
  },
  {
    id: "yellow",
    name: "Yellow House",
    color: "#ffef00",
  },
] as const;



export default function GamePage(){


  const [page,setPage] =
    useState<
      "rules" | "shuffle" | "game"
    >("rules");



  const [shuffled,setShuffled] =
    useState(false);



  const [clockwiseOrder,setClockwiseOrder] =
    useState<typeof houseData[number][]>([]);



  const [antiClockwiseOrder,setAntiClockwiseOrder] =
    useState<typeof houseData[number][]>([]);



  const [currentTurn,setCurrentTurn] =
    useState(0);



  const [scores,setScores] =
    useState({

      red:0,
      blue:0,
      green:0,
      yellow:0,

    });



  const [selectedQuestion,setSelectedQuestion] =
    useState<number | null>(null);



  const [usedQuestions,setUsedQuestions] =
    useState<number[]>([]);



  const [answerRevealed,setAnswerRevealed] =
    useState(false);



  const [awarded,setAwarded] =
    useState<string[]>([]);






  function shuffleHouses(){


    if(shuffled)
      return;



    const order =
      [...houseData]
      .sort(
        ()=>Math.random()-0.5
      );



    setClockwiseOrder(order);



    setAntiClockwiseOrder(
      [...order].reverse()
    );



    setShuffled(true);


  }





  function startGame(){

    setPage("game");

  }





  const currentHouse =
    clockwiseOrder[currentTurn];

    const currentQuestion =
  questions.find(
    (q) => q.id === selectedQuestion
  );






  function nextTurn(){


    setCurrentTurn(

      prev =>
      (prev + 1) % 4

    );


  }







  // FIXED SCORE FUNCTION
  // Any house can get points


  function givePoints(
    houseId:string
  ){


    if(
      awarded.includes(houseId)
    )
      return;




    setScores(prev=>({

      ...prev,

      [houseId]:
      prev[
        houseId as keyof typeof prev
      ] + 10


    }));




    setAwarded(prev=>[

      ...prev,

      houseId

    ]);



  }






  function finishQuestion(){


    if(
      selectedQuestion===null
    )
      return;



    setUsedQuestions(prev=>[

      ...prev,

      selectedQuestion

    ]);



    setSelectedQuestion(null);



    setAnswerRevealed(false);



    setAwarded([]);



    nextTurn();


  }







  // ================= RULES =================


  if(page==="rules"){


    return (

      <main className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-orange-300
      to-yellow-200
      ">


      <div className="
      bg-white/40
      backdrop-blur-3xl
      rounded-[36px]
      p-10
      text-center
      ">


      <h1 className="
      text-5xl
      font-black
      ">

      🏆 HOUSE QUIZ GAME

      </h1>



      <div className="
      mt-6
      text-xl
      font-bold
      space-y-3
      ">


      <p>
      ✅ Correct answer = 10 points
      </p>


      <p>
      ✅ House order decides question turns
      </p>


      <p>
      ✅ Highest score wins
      </p>


      <p>
      ✅ One shuffle for the whole game
      </p>


      </div>





      <button

      onClick={()=>
      setPage("shuffle")
      }

      className="
      mt-8
      rounded-full
      bg-black
      text-white
      px-10
      py-4
      text-xl
      font-black
      "

      >

      Continue

      </button>



      </div>


      </main>

    );

  }







  // ================= SHUFFLE =================


  if(page==="shuffle"){


    return (

      <main className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-blue-200
      to-green-200
      ">


      <div className="
      bg-white/40
      backdrop-blur-3xl
      rounded-[36px]
      p-10
      text-center
      ">


      <h1 className="
      text-5xl
      font-black
      ">

      🎲 SHUFFLE HOUSE ORDER

      </h1>




      {!shuffled && (

      <button

      onClick={shuffleHouses}

      className="
      mt-8
      rounded-full
      bg-black
      text-white
      px-10
      py-4
      font-black
      "

      >

      Shuffle Once

      </button>

      )}
      {
shuffled && (

<div className="mt-8">


<h2 className="
text-3xl
font-black
">

↻ CLOCKWISE ORDER

</h2>



<div className="
mt-5
space-y-3
">

{
clockwiseOrder.map(
(house,index)=>(


<div

key={house.id}

className="
rounded-2xl
p-4
font-black
text-xl
"

style={{

backgroundColor:
house.color,

color:
house.id==="red"
?
"white"
:
"black"

}}

>

{index+1}. {house.name}

{
index===0 &&
" ⭐ FIRST PICK"
}

</div>


)

)

}

</div>





<h2 className="
text-3xl
font-black
mt-10
">

↺ ANTI-CLOCKWISE ORDER

</h2>



<div className="
mt-5
space-y-3
">

{
antiClockwiseOrder.map(
(house,index)=>(


<div

key={house.id}

className="
rounded-2xl
p-4
font-black
text-xl
"

style={{

backgroundColor:
house.color,

color:
house.id==="red"
?
"white"
:
"black"

}}

>

{index+1}. {house.name}

</div>


)

)

}

</div>





<button

onClick={startGame}

className="
mt-10
rounded-full
bg-green-600
text-white
px-12
py-5
text-xl
font-black
"

>

START GAME 🚀

</button>


</div>

)

}


</div>


</main>

)

}







// ================= WINNER =================


if(
usedQuestions.length===TOTAL_QUESTIONS
){


const ranking =
Object.entries(scores)
.sort(
(a,b)=>b[1]-a[1]
);



const winner =
houseData.find(
h=>h.id===ranking[0][0]
);



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
"

>


<div

className="
bg-white
rounded-[40px]
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

🏆 WINNER

</h1>




<div

className="
mt-8
rounded-[35px]
p-10
"

style={{

backgroundColor:
winner?.color

}}

>


<h2 className="
text-5xl
font-black
">

{winner?.name}

</h2>



<p className="
text-7xl
font-black
mt-5
">

{ranking[0][1]} POINTS

</p>


</div>




<h2 className="
text-3xl
font-black
mt-10
">

FINAL RANKING

</h2>




{
ranking.map(
(item,index)=>{


const house =
houseData.find(
h=>h.id===item[0]
);


return (

<p

key={item[0]}

className="
text-2xl
font-bold
mt-3
"

>

{index+1}. {house?.name}
-
{item[1]} pts

</p>

)


}

)

}




<button

onClick={()=>
window.location.reload()
}

className="
mt-10
rounded-full
bg-black
text-white
px-10
py-4
font-black
"

>

NEW GAME

</button>


</div>


</main>

)

}








// ================= GAME BOARD =================



return (

<main className="
grid
lg:grid-cols-3
gap-6
p-6
">





{/* QUESTIONS */}



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


<h2 className="
text-3xl
font-black
mb-6
">

QUESTIONS

</h2>




<div className="
grid
grid-cols-4
gap-4
">


{
Array.from({
length:TOTAL_QUESTIONS
})
.map((_,i)=>{


const number=i+1;


const used =
usedQuestions.includes(number);



return (

<button

key={number}

disabled={used}

onClick={()=>
setSelectedQuestion(number)
}

className={`
h-16
rounded-2xl
font-black
text-xl

${
used
?
"bg-gray-400 text-white"
:
"bg-white hover:bg-orange-200"
}

`}

>

{number}

</button>


)


})

}


</div>


</section>










<section className="
lg:col-span-2
space-y-6
">





{/* TURN */}



<div

className="
rounded-[36px]
bg-black
text-white
p-6
text-center
"

>


<h2 className="
text-3xl
font-black
">

🎯 CURRENT TURN

</h2>



<p className="
text-4xl
font-black
mt-3
">

{currentHouse?.name}

<br></br>choose<br></br> number for your question

</p>


</div>










{/* SCOREBOARD */}



<div

className="
rounded-[36px]
border
border-white/60
bg-white/25
backdrop-blur-3xl
shadow-[0_10px_40px_rgba(0,0,0,.08)]
p-6
"

>



<h2

className="
text-3xl
font-black
uppercase
tracking-wider
text-center
mb-8
"

>

LIVE SCOREBOARD

</h2>




<div className="
grid
grid-cols-2
gap-6
">



{
houseData.map(
(house)=>(


<div

key={house.id}

className="
rounded-[30px]
border
border-white/60
bg-white/35
backdrop-blur-3xl
p-6
hover:scale-105
transition
"

style={{

boxShadow:
`0 0 28px ${house.color}80`

}}

>


<div

className="
h-3
rounded-full
mb-5
"

style={{

backgroundColor:
house.color,

boxShadow:
`0 0 20px ${house.color}`

}}

 />



<h3 className="
text-2xl
font-black
text-center
">

{house.name}

</h3>




<div

className="
mt-6
rounded-2xl
bg-white/40
border
border-white/50
py-5
text-center
"

>


<p className="
text-6xl
font-black
">

{scores[house.id]}

</p>



<p className="
text-sm
font-bold
">

POINTS

</p>



</div>


</div>


)

)

}


</div>


</div>








{/* QUESTION */}



<div

className="
rounded-[36px]
border
border-white/60
bg-white/25
backdrop-blur-3xl
p-8
"

>


{
selectedQuestion===null

?

<h2 className="
text-4xl
font-black
text-center
">

SELECT QUESTION

</h2>


:

<>


<h2 className="
text-4xl
font-black
">

QUESTION {selectedQuestion}

</h2>




<div
  className="
  mt-8
  bg-white
  rounded-2xl
  p-8
  space-y-6
  "
>

  {/* Question */}

  <p className="text-3xl font-bold">
    {currentQuestion?.question}
  </p>

  {/* Single Image */}

  {currentQuestion?.type === "image" &&
    currentQuestion.image && (

      <img
        src={currentQuestion.image}
        alt="Question"
        className="mx-auto max-h-80 rounded-2xl"
      />

  )}

  {/* Three Images */}

  {currentQuestion?.type === "three-images" &&
    currentQuestion.images && (() => {

      const images = currentQuestion.images;

      return (

        <div className="grid grid-cols-3 gap-6">

          {(["A","B","C"] as const).map((key)=>(

            <div
              key={key}
              className="
              rounded-2xl
              border
              bg-white
              p-4
              text-center
              shadow
              "
            >

              <img
                src={images[key]}
                alt={key}
                className="
                h-48
                w-full
                object-cover
                rounded-xl
                "
              />

              <p className="mt-3 text-2xl font-black">
                {key}
              </p>

            </div>

          ))}

        </div>

      );

    })()}

</div>





{
!answerRevealed &&

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
font-black
"

>

REVEAL ANSWER

</button>

}







{
answerRevealed &&

<>


<div className="
mt-8
bg-green-100
rounded-2xl
p-6
">

<h3 className="
text-2xl
font-black
">

CORRECT ANSWER

</h3>

<p className="text-3xl font-black mt-3">

{currentQuestion?.answer}

</p>


</div>







<div className="
grid
md:grid-cols-2
gap-5
mt-8
">


{
houseData.map(
(house)=>{


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
font-black
text-xl
"

style={{

backgroundColor:
house.color,

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

)


}

)

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
font-black
"

>

FINISH QUESTION

</button>



</>

}


</>

}


</div>



</section>




</main>

);

}
