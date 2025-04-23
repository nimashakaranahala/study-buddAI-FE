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
// import NavBarOtherPages from "./NavBarOtherPages"
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


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

// interface  Attempt  {
//     attempt_id: number,
//     quiz_id: number,
//     score: string
//   }

// interface QuestionsProps {
//     attempt: Attempt;
// }



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

  const location = useLocation();
 
  const data = location.state;
  const attempt = data.data
  const navigate = useNavigate();

  // pass in attempt -> get quiz_id and attempt_id

  useEffect(() => {
    getQuizQuestions(attempt.quiz_id)
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


    // post selected answer here if needed

    postAttemptAnswer(selectedOptionId, questionId, attempt.attempt_id)
      .then((addedAttemptAnswer) => {

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

    postAttemptAnswer(selectedOptionId, questionId, attempt.attempt_id)
      .then(() => {
    
        const attempt_id = attempt.attempt_id
        navigate(`/results`, { state: { attempt_id } })
  
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

    {/* <NavBarOtherPages /> */}
    <main>
   
    <div>
      <h2>Choose the correct answer</h2>
      <div className="progress">
      <div className="progress-bar progress-bar-striped" role="progressbar"
      style={{ width: `${progress * 100}%` }}
      aria-valuenow={progress * 100}
      aria-valuemin="0"
      aria-valuemax="100">
      </div>
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
        <button className="next-question-button" onClick={handleNextQuestion}>Next</button>
      ) : (
       
          <button className="next-question-button" onClick={handleCompleteQuiz}>Complete Quiz</button>
        
      )}
    </div>
    </div>
    </main>
    </>
  );
};

export default Questions;
