import React, { useState, useEffect } from "react";
import OptionCard from "./OptionCard";
import { getQuestionOptions, getQuizQuestions } from "../api";
import { Link } from "react-router-dom";

interface QuestionOption {
  question_options_id: number;
  question_id: number;
  option_body: string;
  is_correct: number;
  label: string;
}

interface QuizQuestion {
  question_id: number;
  quiz_id: number;
  question_body: string;
}

const Questions: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [questionOptions, setQuestionOptions] = useState<QuestionOption[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [errorQuestion, setQuestionError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getQuizQuestions(1)
      .then((data) => {
        setQuizQuestions(data);
      })
      .catch((err) => {
        setError("Failed to load quiz questions.");
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const question = quizQuestions[currentQuestionIndex];
    if (!question) return;

    getQuestionOptions(question.question_id)
      .then((data) => {
        setQuestionOptions(data);
        setSelectedOptionId(null);
        setError(null);
      })
      .catch((err) => {
        setError("Failed to load question options.");
        console.error(err);
      });
  }, [quizQuestions, currentQuestionIndex]);

  const handleSelectOption = (optionId: number) => {
    setQuestionError(null);
    setSelectedOptionId(optionId);
  };

  const handleNextQuestion = () => {
    if (selectedOptionId === null) {
      setQuestionError("You must select an option");
      return;
    }

    // post selected answer here if needed

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleCompleteQuiz = () => {
    if (selectedOptionId === null) {
      setQuestionError("You must select an option");
      return;
    }

    // post final answer
    console.log("Quiz completed");
    // redirect or show results
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div>
      <h2>Questions Test</h2>
      <h3>{currentQuestion?.question_body || "Loading..."}</h3>

      <ul className="option-list">
        {questionOptions.map((option) => (
          <OptionCard
            key={option.question_options_id}
            option={option}
            isSelected={selectedOptionId === option.question_options_id}
            onSelect={handleSelectOption}
          />
        ))}
      </ul>

      {errorQuestion && <p>{errorQuestion}</p>}
      {error && <p>{error}</p>}

      {currentQuestionIndex < quizQuestions.length - 1 ? (
        <button onClick={handleNextQuestion}>Next</button>
      ) : (
        <Link to={"/results"}>
          <button onClick={handleCompleteQuiz}>Complete Quiz</button>
        </Link>
      )}
    </div>
  );
};

export default Questions;
