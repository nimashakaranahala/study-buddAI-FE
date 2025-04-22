import React from "react";
import ResultCard from "./ResultCard"

const results = {
    questions: [
      {
        question_body: "What is the chemical symbol for water?",
        attempted_answer: "H2O",
        correct_answer: "H2O",
      },
      {
        question_body: "How many planets are in our solar system?",
        attempted_answer: "Nine",
        correct_answer: "Eight",
      },
      {
        question_body: "Who was the first Roman Emperor?",
        attempted_answer: "Nero",
        correct_answer: "Augustus",
      },
      {
        question_body: "What is 2 + 2?",
        attempted_answer: "3",
        correct_answer: "4",
      },
    ],
    score: 0.25,
  };

interface ResultProps {}

const answers = results.questions;



const score = results.score * 100;

const Results: React.FC<ResultProps> = () => {
  return (
    <div className="results">
      <h2>Quiz Results</h2>
      <h3>Your score is {score}%!</h3>
      <ul className="results-list">
        {
            answers.map((answer) => {
                return <ResultCard answer={answer}/>
            })
        }
        
      </ul>

    </div>
  );
};

export default Results;
