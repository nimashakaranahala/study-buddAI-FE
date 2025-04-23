import React, { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import { getResults } from "../api";
// import NavBarOtherPages from "./NavBarOtherPages"
//import NavBarOtherPages from "./NavBarOtherPages"
import { useLocation } from "react-router-dom";


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
  const [results, setResults] = useState<ResultsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<ResultAnswer[] | null>(null);



  const location = useLocation();

 
  const data = location.state;
  const attempt_id = data.attempt_id




  useEffect(() => {
    getResults(attempt_id)
      .then((data) => {
   
        setResults(data);
  
        setAnswers(data.questions);
      })
      .catch(() => {
        setError("Failed to load results.");
      });
  }, []);

  return (

    <div className="results">


    {/* <NavBarOtherPages /> */}
    <div>

      <h2>Quiz Results</h2>
      {results && <h3>Your score is {results.score * 100}%!</h3>}
      {error && <p>{error}</p>}

      <ul className="results-list">
        {answers?.map((answer, index) => (
          <ResultCard key={index} answer={answer} />
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Results;
