
import React, { useState, useEffect } from "react";

import { postAttempt } from "../api";
// import Questions from "./Questions";
import { useNavigate } from "react-router-dom";

interface Quiz {
  quiz_id: number;
  file_id: number;
  created_at: string;
  quiz_name: string;
}

interface QuizCardProps {
  quiz: Quiz;
}



const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {

  const navigate = useNavigate();

  const handleTakeQuiz = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    postAttempt(quiz.quiz_id).then((data) => {
      console.log(data)
  

      navigate(`/questions`, { state: { data } });
    });
  };

  return (
    <ul className="quizCard">
      <p>{quiz.quiz_name}</p>
      <button onClick={handleTakeQuiz}>Take Quiz</button>
    </ul>
  );
};

export default QuizCard;
