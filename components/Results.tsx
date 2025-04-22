import React, { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import { getResults } from "../api";

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

  //update with real attempt_id  passed in
  const attempt_id = 1;

  useEffect(() => {
    getResults(attempt_id)
      .then((data) => {
        console.log(data);
        setResults(data);
        console.log(results);
        setAnswers(data.questions);
      })
      .catch(() => {
        setError("Failed to load results.");
      });
  }, []);

  return (
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
  );
};

export default Results;
