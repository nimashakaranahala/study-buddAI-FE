import React from "react";

interface Answer {
  question_body: string;
  attempted_answer: string;
  correct_answer: string;
}

interface ResultCardProps {
  answer: Answer;
}

const ResultCard: React.FC<ResultCardProps> = ({ answer }) => {
  return (
    <li>
      {answer.question_body}
      {answer.attempted_answer === answer.correct_answer ? (
        <p className="correct-answer">✓ {answer.attempted_answer}</p>
      ) : (
        <div>
          <p className="wrong-answer">X {answer.attempted_answer}</p>
          <p>{answer.correct_answer}</p>
        </div>
      )}
    </li>
  );
};

export default ResultCard;
