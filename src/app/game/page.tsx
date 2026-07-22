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
    name: "Green House",
    color: "#37fd12",
  },
  {
    id: "yellow",
    name: "Yellow House",
    color: "#ffef00",
  },
] as const;



export default function GamePage() {


  const [page, setPage] =
    useState<
      "rules" | "shuffle" | "game"
    >("rules");


  const [shuffled, setShuffled] =
    useState(false);


  const [clockwiseOrder, setClockwiseOrder] =
    useState<typeof houseData[number][]>([]);


  const [antiClockwiseOrder, setAntiClockwiseOrder] =
    useState<typeof houseData[number][]>([]);


  const [currentTurn, setCurrentTurn] =
    useState(0);


  const [scores, setScores] =
    useState({
      red: 0,
      blue: 0,
      green: 0,
      yellow: 0,
    });


  const [selectedQuestion, setSelectedQuestion] =
    useState<number | null>(null);


  const [usedQuestions, setUsedQuestions] =
    useState<number[]>([]);


  const [answerRevealed, setAnswerRevealed] =
    useState(false);


  const [awarded, setAwarded] =
    useState<string[]>([]);



  function shuffleHouses() {

    if (shuffled) return;


    const order =
      [...houseData]
      .sort(
        () => Math.random() - 0.5
      );


    setClockwiseOrder(order);


    setAntiClockwiseOrder(
      [...order].reverse()
    );


    setShuffled(true);

  }



  function startGame() {

    setPage("game");

  }



  const currentHouse =
    clockwiseOrder[currentTurn];


  const currentQuestion =
    questions.find(
      (q) =>
        q.id === selectedQuestion
    );



  function nextTurn() {

    setCurrentTurn(
      prev =>
      (prev + 1) % 4
    );

  }



  function givePoints(
    houseId: string
  ) {


    if (
      awarded.includes(houseId)
    )
      return;



    setScores(prev => ({

      ...prev,

      [houseId]:
      prev[
        houseId as keyof typeof prev
      ] + 10

    }));


    setAwarded(prev => [

      ...prev,

      houseId

    ]);

  }



  function finishQuestion() {


    if (
      selectedQuestion === null
    )
      return;



    setUsedQuestions(prev => [

      ...prev,

      selectedQuestion

    ]);


    setSelectedQuestion(null);


    setAnswerRevealed(false);


    setAwarded([]);


    nextTurn();

  }





// ================= RULES =================


if (page === "rules") {


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
max-w-xl
rounded-[32px]
bg-white/40
backdrop-blur-3xl
p-8
text-center
shadow-xl
"
>


<h1
className="
text-4xl
font-black
"
>

🏆 HOUSE QUIZ GAME

</h1>



<div
className="
mt-5
space-y-2
text-lg
font-bold
"
>


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

onClick={() =>
setPage("shuffle")
}

className="
mt-7
rounded-full
bg-black
text-white
px-10
py-3
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



if (page === "shuffle") {


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
max-w-3xl
rounded-[32px]
bg-white/40
backdrop-blur-3xl
p-8
text-center
shadow-xl
"
>


<h1
className="
text-4xl
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
mt-8
rounded-full
bg-black
text-white
px-10
py-3
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
mt-6
grid
grid-cols-2
gap-6
"
>


<div>

<h2
className="
text-2xl
font-black
mb-3
"
>

↻ CLOCKWISE

</h2>


{
clockwiseOrder.map(
(house,index)=>(


<div

key={house.id}

className="
rounded-xl
p-3
mb-2
font-black
"

style={{
backgroundColor: house.color,
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

<h2
className="
text-2xl
font-black
mb-3
"
>

↺ ANTI-CLOCKWISE

</h2>


{
antiClockwiseOrder.map(
(house,index)=>(


<div

key={house.id}

className="
rounded-xl
p-3
mb-2
font-black
"

style={{
backgroundColor: house.color,
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
px-12
py-4
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

);

}
  
// ================= GAME BOARD =================


return (

<main
className="
h-full
grid
grid-cols-[360px_1fr]
gap-5
p-4
overflow-hidden
"
>


{/* QUESTION SELECTOR */}


<section

className="
rounded-[32px]
border
border-white/50
bg-white/25
backdrop-blur-3xl
p-5
overflow-hidden
"

>


<h2
className="
text-2xl
font-black
mb-4
text-center
"
>

QUESTIONS

</h2>



<div
className="
grid
grid-cols-5
gap-2
"
>


{
Array.from({
length: TOTAL_QUESTIONS
})
.map((_,i)=>{


const number = i + 1;


const used =
usedQuestions.includes(number);



return (

<button

key={number}

disabled={used}

onClick={() =>
setSelectedQuestion(number)
}

className={`
aspect-square
rounded-xl
font-black
text-lg

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






{/* RIGHT DASHBOARD */}


<section

className="
grid
grid-rows-[auto_auto_1fr]
gap-5
overflow-hidden
"

>



{/* CURRENT TURN */}



<div

className="
rounded-[32px]
bg-black
text-white
p-5
text-center
"

>


<h2
className="
text-2xl
font-black
"
>

🎯 CURRENT TURN

</h2>



<p
className="
text-3xl
font-black
mt-2
"
>

{currentHouse?.name}

</p>


<p
className="
text-lg
font-bold
"
>

Choose a question number

</p>


</div>







{/* SCOREBOARD */}



<div

className="
rounded-[32px]
border
border-white/50
bg-white/25
backdrop-blur-3xl
p-5
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
gap-3
"

>


{
houseData.map(
(house)=>(


<div

key={house.id}

className="
rounded-2xl
bg-white/35
border
border-white/50
p-3
text-center
"

style={{

boxShadow:
`0 0 25px ${house.color}70`

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



<h3

className="
font-black
text-sm
"

>

{house.name}

</h3>



<p

className="
text-4xl
font-black
mt-2
"

>

{scores[house.id]}

</p>


<p

className="
text-xs
font-bold
"

>

POINTS

</p>


</div>


)

)

}


</div>


</div>









{/* QUESTION AREA */}



<div

className="
rounded-[32px]
border
border-white/50
bg-white/25
backdrop-blur-3xl
p-6
overflow-hidden
"

>



{
selectedQuestion === null

?


<h2

className="
text-3xl
font-black
text-center
mt-10
"

>

SELECT QUESTION

</h2>


:


<>


<h2

className="
text-3xl
font-black
"

>

QUESTION {selectedQuestion}

</h2>





<div

className="
mt-4
bg-white
rounded-2xl
p-5
overflow-hidden
"

>


<p

className="
text-xl
font-bold
"

>

{currentQuestion?.question}

</p>





{
currentQuestion?.type === "image"
&&
currentQuestion.image
&&

(

<img

src={currentQuestion.image}

alt="Question"

className="
mx-auto
mt-5
max-h-[240px]
rounded-xl
object-contain
"

/>

)

}






{
currentQuestion?.type === "three-images"
&&
currentQuestion.images
&&

(

<div

className="
grid
grid-cols-3
gap-3
mt-5
"

>


{
(["A","B","C"] as const)
.map(
(key)=>(


<div

key={key}

className="
rounded-xl
border
p-2
text-center
"

>


<img

src={
currentQuestion.images[key]
}

alt={key}

className="
h-32
w-full
object-cover
rounded-lg
"

/>


<p

className="
font-black
"

>

{key}

</p>


</div>


)

)

}


</div>

)

}



</div>









{
!answerRevealed &&


<button

onClick={() =>
setAnswerRevealed(true)
}

className="
mt-5
rounded-full
bg-orange-600
text-white
px-8
py-3
font-black
"

>

REVEAL ANSWER

</button>


}









{
answerRevealed &&


<>


<div

className="
mt-5
rounded-2xl
bg-green-100
p-4
"

>


<h3
className="
font-black
text-xl
"
>

CORRECT ANSWER

</h3>


<p

className="
text-2xl
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
gap-3
mt-5
"

>


{
houseData.map(
(house)=>{


const done =
awarded.includes(house.id);



return (

<button

key={house.id}

disabled={done}

onClick={() =>
givePoints(house.id)
}

className="
rounded-xl
p-3
font-black
text-sm
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
"✅"
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
mt-5
rounded-full
bg-black
text-white
px-10
py-3
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
