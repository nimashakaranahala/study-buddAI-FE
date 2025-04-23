import React, { useState } from "react";

interface Answer {
  question_body: string;
  attempted_answer: string;
  correct_answer: string;
}

interface ResultCardProps {
  answer: Answer;
}

const ResultCard: React.FC<ResultCardProps> = ({ answer }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapseId = `collapse-${Math.random().toString(36).substr(2, 9)}`;
  const isCorrect = answer.attempted_answer === answer.correct_answer;
  return (
    <li>
      <p className="question-text">{answer.question_body}</p>

      {isCorrect ? (
        <p className="correct-answer">✓ {answer.attempted_answer}</p>
      ) : (
        <>
          <p
            className="wrong-answer clickable"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-expanded={!isCollapsed}
            aria-controls={collapseId}
          >
            ✗ {answer.attempted_answer}
          </p>

          <div
            id={collapseId}
            className={`collapse ${!isCollapsed ? "show" : ""}`}
            aria-hidden={isCollapsed}
          >
            <div className="card-body">
              <p className="answer">✓ {answer.correct_answer}</p>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default ResultCard;
