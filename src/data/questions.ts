import questionsData from "./questions.json";

export type Question = {
  id: number;

  subject: string;

  type: "text" | "image" | "three-images";

  question: string;

  answer: string;

  points: number;

  image?: string;

  images?: {
    A: string;
    B: string;
    C: string;
  };
};

export const questions = questionsData as Question[];
