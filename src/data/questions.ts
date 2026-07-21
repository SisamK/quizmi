export type Question = {
  id: number;

  question: string;

  options: string[];

  answer: string;

  marks: number;

  category: string;

  difficulty: "Easy" | "Medium" | "Hard";

  image?: string; // optional image

  explanation?: string; // optional explanation
};

export const questions: Question[] = [

  {
    id: 1,

    question: "What is the first step of the scientific learning process?",

    options: [
      "Observation",
      "Experiment",
      "Conclusion",
      "Hypothesis"
    ],

    answer: "Observation",

    marks: 10,

    category: "Science",

    difficulty: "Easy"
  },

  {
    id: 2,

    question: "नेपालमा हालसम्म कति वटा नगरपालिका छन्?",

    options: [
      "276",
      "293",
      "460",
      "753"
    ],

    answer: "293",

    marks: 10,

    category: "General Knowledge",

    difficulty: "Medium"
  },

  {
    id: 3,

    question: "Who is the captain of Nepal Men's National Cricket Team?",

    options: [
      "Sandeep Lamichhane",
      "Rohit Paudel",
      "Gyanendra Malla",
      "Paras Khadka"
    ],

    answer: "Rohit Paudel",

    marks: 10,

    category: "Sports",

    difficulty: "Easy"
  },

  {
    id: 4,

    question: "Find the HCF of 18 and 36.",

    options: [
      "6",
      "9",
      "12",
      "18"
    ],

    answer: "18",

    marks: 10,

    category: "Mathematics",

    difficulty: "Easy"
  },

  {
    id: 5,

    question: "What is the formula for the area of a rectangle?",

    options: [
      "Length × Breadth",
      "Length + Breadth",
      "2 × Length × Breadth",
      "Length²"
    ],

    answer: "Length × Breadth",

    marks: 10,

    category: "Mathematics",

    difficulty: "Easy"
  },

  // ---------- IMAGE QUESTION EXAMPLE ----------

  {
    id: 6,

    question: "Identify the animal shown in the picture.",

    options: [
      "Tiger",
      "Lion",
      "Leopard",
      "Cheetah"
    ],

    answer: "Tiger",

    marks: 10,

    category: "Picture",

    difficulty: "Easy",

    image: "/questions/q6.png"
  }

];

/*
====================================================

ADD NEW QUESTIONS LIKE THIS

{
    id: 7,

    question: "...",

    options:[
      "...",
      "...",
      "...",
      "..."
    ],

    answer:"...",

    marks:10,

    category:"Science",

    difficulty:"Medium"
},

====================================================
*/