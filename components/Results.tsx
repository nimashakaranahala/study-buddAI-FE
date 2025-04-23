import React, { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import { getResults } from "../api";
import { postAttempt } from "../api";
// import Questions from "./Questions";
import { useNavigate } from "react-router-dom";


import { useLocation } from "react-router-dom";
import Award from "./Award";
import TryAgain from "./TryAgain"


interface ResultAnswer {
  question_body: string;
  attempted_answer: string;
  correct_answer: string;
}

interface ResultsData {
  questions: ResultAnswer[];
  score: number;
}

const Results: React.FC = () => {

  const navigate = useNavigate();

  const [results, setResults] = useState<ResultsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<ResultAnswer[] | null>(null);
  const [animation, setAnimation] = useState<boolean | null>(null);
  const location = useLocation();

  const data = location.state;
  const attempt_id = data.attempt.attempt_id;
 
  
  useEffect(() => {
    getResults(attempt_id)
      .then((data) => {
        setResults(data);
        setAnswers(data.questions);
        setAnimation(true)

      })
      .catch(() => {
        setError("Failed to load results.");
      });
  }, []);

  const correctAnswers = answers?.filter(
    (ans) => ans.attempted_answer === ans.correct_answer
  ).length || 0;
  
  const totalQuestions = answers?.length || 0;
  const percentage = (correctAnswers / totalQuestions) * 100;

  const handleReTakeQuiz = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    postAttempt(data.attempt.quiz_id).then((data) => {
      console.log(data)
  

      navigate(`/questions`, { state: { data } });
    });
  };
  
  return (
    <div className="results">

{results && <h3>Your score is {Math.round(percentage)}%!</h3>}
<div className="results-animation"> 
        {results && animation && percentage > 50 ? 
        <Award show={true} /> : <TryAgain show={true} />}</div>

       

        {error && <p>{error}</p>}

        <ul className="results-list">
          {answers?.map((answer, index) => (
            <ResultCard key={index} answer={answer} />
          ))}
        </ul>
        <button className="retake-quiz-button" onClick={handleReTakeQuiz}>Retake quiz</button>
    




    </div>
  );
};

export default Results;
