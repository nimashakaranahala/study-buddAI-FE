import React, { useState, useEffect } from "react";
import OptionCard from "./OptionCard";
import {
  getQuestionOptions,
  getQuizQuestions,
  postAttemptAnswer,
} from "../api";
import { Link } from "react-router-dom";
import animation from "../src/assets/loading.json";
import Lottie from "lottie-react";
import NavBarOtherPages from "./NavBarOtherPages"

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
  const [questionId, setQuestionId] = useState<number | null>(null);
  const [errorQuestion, setQuestionError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attemptError, setAttemptError] = useState<string | null>(null);
  const [attemptLoading, setAttemptLoading] = useState<boolean | null>(null);
  const attempt_id = 1;

  useEffect(() => {
    getQuizQuestions(1)
      .then((data) => {
        setQuizQuestions(data);
      })
      .catch(() => {
        setError("Failed to load quiz questions.");
   
      });
  }, []);

  useEffect(() => {
    const question = quizQuestions[currentQuestionIndex];
    if (!question) return;

    getQuestionOptions(question.question_id)
      .then((data) => {
        setQuestionOptions(data);
        setQuestionId(data[0].question_id)
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

  const handleNextQuestion = (event) => {
    setAttemptLoading(true);
    setAttemptError(null);
    event.preventDefault();

    if (selectedOptionId === null) {
      setAttemptLoading(false);
      setQuestionError("You must select an option");
      return;
    }

    console.log(questionOptions)

    // post selected answer here if needed

    postAttemptAnswer(selectedOptionId, questionId, attempt_id)
      .then((addedAttemptAnswer) => {
        console.log(addedAttemptAnswer);
      })
      .catch(() => {
        setAttemptError("You answer failed to submit, please try again!");
      })
      .finally(() => {
        setAttemptLoading(false);
      });

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleCompleteQuiz = (event) => {
    setAttemptLoading(true);
    setAttemptError(null);
    event.preventDefault();

    if (selectedOptionId === null) {
      setQuestionError("You must select an option");
      return;
    }

    postAttemptAnswer(selectedOptionId, questionId, attempt_id)
      .then(() => {
    
        window.location.href = "/results";
      })
      .catch(() => {
        setAttemptError("You answer failed to submit, please try again!");
        setAttemptLoading(false);
      })
     
  };

  if (attemptLoading)
    return (
      <Lottie
        animationData={animation}
        loop={true}
        autoplay={true}
        className="loading-animation"
      />
    );

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = (currentQuestionIndex+1)/(quizQuestions.length)

  return (
    <>  
    <NavBarOtherPages />
    <div>
      <h2>Choose the correct answer</h2>
      <div className="progress">
      <div
  className="progress-bar progress-bar-striped"
  role="progressbar"
  style={{ width: `${progress * 100}%` }}
  aria-valuenow={progress * 100}
  aria-valuemin="0"
  aria-valuemax="100"
></div>
</div>
<div className="question">
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
      {attemptError && <p>{attemptError}</p>}

      {currentQuestionIndex < quizQuestions.length - 1 ? (
        <button onClick={handleNextQuestion}>Next</button>
      ) : (
       
          <button onClick={handleCompleteQuiz}>Complete Quiz</button>
        
      )}

</div>
    </div>
    </>
  );
};

export default Questions;
