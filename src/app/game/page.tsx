"use client";

import { useState } from "react";
import { questions } from "@/src/data/questions";


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
    name: "#37fd12",
    color: "#37fd12",
  },
  {
    id: "yellow",
    name: "Yellow House",
    color: "#ffef00",
  },
] as const;



export default function GamePage() {


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
    useState<number|null>(null);


  const [usedQuestions,setUsedQuestions] =
    useState<number[]>([]);


  const [answerRevealed,setAnswerRevealed] =
    useState(false);


  const [awarded,setAwarded] =
    useState<string[]>([]);



  function shuffleHouses(){

    if(shuffled) return;


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
      q =>
      q.id === selectedQuestion
    );





  function nextTurn(){

    setCurrentTurn(
      prev =>
      (prev + 1) % 4
    );

  }




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

    if(selectedQuestion===null)
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

<main
className="
h-full
flex
items-center
justify-center
"
>

<div
className="
rounded-[40px]
bg-white/40
backdrop-blur-3xl
p-12
text-center
shadow-xl
max-w-xl
"
>


<h1
className="
text-5xl
font-black
"
>

🏆 HOUSE QUIZ GAME

</h1>



<div
className="
mt-8
space-y-3
text-xl
font-bold
"
>

<p>
✅ Correct answer = 10 points
</p>

<p>
✅ House order decides turns
</p>

<p>
✅ Highest score wins
</p>

<p>
✅ Shuffle happens once
</p>


</div>



<button

onClick={()=>
setPage("shuffle")
}

className="
mt-10
rounded-full
bg-black
text-white
px-12
py-4
font-black
"

>

CONTINUE

</button>



</div>

</main>

);

}







// ================= SHUFFLE =================



if(page==="shuffle"){


return (

<main
className="
h-full
flex
items-center
justify-center
"
>


<div

className="
rounded-[40px]
bg-white/40
backdrop-blur-3xl
p-10
text-center
shadow-xl
"

>


<h1
className="
text-5xl
font-black
"
>

🎲 SHUFFLE HOUSE ORDER

</h1>



{
!shuffled && (

<button

onClick={shuffleHouses}

className="
mt-10
rounded-full
bg-black
text-white
px-12
py-4
font-black
"

>

SHUFFLE ONCE

</button>

)
}



{
shuffled && (

<div
className="
mt-8
grid
grid-cols-2
gap-8
"
>


<div>

<h2 className="
text-3xl
font-black
mb-4
">
↻ CLOCKWISE
</h2>


{
clockwiseOrder.map(
(house,index)=>(

<div
key={house.id}

className="
rounded-2xl
p-4
mb-3
font-black
text-xl
"

style={{
backgroundColor:house.color,
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



<div>

<h2 className="
text-3xl
font-black
mb-4
">
↺ ANTI-CLOCKWISE
</h2>


{
antiClockwiseOrder.map(
(house,index)=>(

<div
key={house.id}

className="
rounded-2xl
p-4
mb-3
font-black
text-xl
"

style={{
backgroundColor:house.color,
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
col-span-2
rounded-full
bg-green-600
text-white
px-14
py-5
font-black
text-xl
"

>

START GAME 🚀

</button>


</div>

)

}



</div>


</main>

);

}


// ================= GAME BOARD =================return (

<main
className="
h-full
grid
grid-cols-[320px_1fr]
gap-5
p-5
overflow-hidden
"
>


{/* QUESTION NUMBER PANEL */}

<section

className="
rounded-[36px]
bg-white/30
backdrop-blur-3xl
border
border-white/50
p-5
shadow-xl
overflow-hidden
"

>


<h2

className="
text-3xl
font-black
text-center
mb-5
"

>

QUESTIONS

</h2>



<div

className="
grid
grid-cols-4
gap-3
"

>


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
aspect-square
rounded-2xl
font-black
text-xl
transition

${
used
?
"bg-gray-400 text-white"
:
"bg-white hover:bg-orange-200 hover:scale-105"
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







{/* MAIN BENTO AREA */}


<section

className="
grid
grid-rows-[150px_170px_1fr]
gap-5
overflow-hidden
"

>




{/* CURRENT TURN */}


<div

className="
rounded-[36px]
bg-black
text-white
flex
items-center
justify-center
flex-col
shadow-xl
"

>


<h2

className="
text-3xl
font-black
"

>

🎯 CURRENT TURN

</h2>



<p

className="
text-5xl
font-black
mt-3
"

>

{currentHouse?.name ?? "Shuffle First"}

</p>


</div>







{/* SCORE BOARD */}



<div

className="
rounded-[36px]
bg-white/30
backdrop-blur-3xl
border
border-white/50
p-5
shadow-xl
"

>


<h2

className="
text-2xl
font-black
text-center
mb-4
"

>

LIVE SCOREBOARD

</h2>



<div

className="
grid
grid-cols-4
gap-4
"

>


{
houseData.map(
house=>(


<div

key={house.id}

className="
rounded-3xl
bg-white/50
p-3
text-center
border
border-white
"

style={{

boxShadow:
`0 0 30px ${house.color}80`

}}

>


<div

className="
h-2
rounded-full
mb-3
"

style={{

backgroundColor:
house.color

}}

>


</div>



<p

className="
font-black
text-lg
"

>

{house.name}

</p>



<p

className="
text-5xl
font-black
"

>

{scores[house.id]}

</p>



<span

className="
font-bold
text-sm
"

>

POINTS

</span>



</div>


)

)

}


</div>


</div>









{/* QUESTION DISPLAY */}


<div

className="
rounded-[36px]
bg-white/30
backdrop-blur-3xl
border
border-white/50
p-8
shadow-xl
overflow-hidden
"

>


{

selectedQuestion===null ?


<h2

className="
text-5xl
font-black
text-center
mt-20
"

>

SELECT QUESTION

</h2>


:


<>


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
mt-5
bg-white
rounded-3xl
p-6
"

>


<p

className="
text-3xl
font-bold
"

>

{currentQuestion?.question}

</p>





{
currentQuestion?.type==="image"
&&
currentQuestion.image
&&

<img

src={currentQuestion.image}

alt="question"

className="
mx-auto
mt-5
max-h-[260px]
rounded-2xl
"

/>

}






{
currentQuestion?.type==="three-images"
&&
currentQuestion.images
&&

<div

className="
grid
grid-cols-3
gap-5
mt-5
"

>


{
(["A","B","C"] as const)
.map(key=>(


<div

key={key}

className="
rounded-2xl
border
p-3
"

>


<img

src={
currentQuestion.images![key]
}

alt={key}

className="
rounded-xl
h-40
w-full
object-cover
"

/>


<p

className="
text-center
font-black
text-2xl
"

>

{key}

</p>


</div>


))

}


</div>

}



</div>





{
!answerRevealed &&


<button

onClick={()=>
setAnswerRevealed(true)
}

className="
mt-6
rounded-full
bg-orange-600
text-white
px-12
py-4
font-black
text-xl
"

>

REVEAL ANSWER

</button>

}





{
answerRevealed &&


<div

className="
mt-5
"

>


<div

className="
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
text-4xl
font-black
"

>

{currentQuestion?.answer}

</p>


</div>



<div

className="
grid
grid-cols-4
gap-4
mt-5
"

>


{
houseData.map(
house=>{


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
rounded-2xl
p-4
font-black
text-lg
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
mt-6
rounded-full
bg-black
text-white
px-14
py-4
font-black
"

>

FINISH QUESTION

</button>



</div>


}



</>


}



</div>



</section>


</main>

}
