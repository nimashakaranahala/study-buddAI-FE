import React from "react";
import OptionCard from "./OptionCard";
import { useState } from "react";

interface QuestionsProps {}

// to be replaced by api call
const questionOptions = [
  {
    question_options_id: 5,
    question_id: 2,
    option_body: "Eight",
    is_correct: 1,
    label: "A",
  },
  {
    question_options_id: 6,
    question_id: 2,
    option_body: "Nine",
    is_correct: 0,
    label: "B",
  },
  {
    question_options_id: 7,
    question_id: 2,
    option_body: "Seven",
    is_correct: 0,
    label: "C",
  },
  {
    question_options_id: 8,
    question_id: 2,
    option_body: "Ten",
    is_correct: 0,
    label: "D",
  },
];

const Questions: React.FC<QuestionsProps> = () => {
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // fetch question options

  const handleSelectOption = (optionId: number) => {
    console.log("selected", optionId);
    setError(null);
    setSelectedOptionId(optionId);
  };

  const handleNextQuestion = () => {
    if (selectedOptionId === null) {
      setError("You must select an option");
    }

    // post the attempt answer
    // fetch question for next option
    // set the selected option back to null
  };

  return (
    <div>
      <h2>Questions Test</h2>
      <h3>Question body to go here </h3>
      <ul className="option-list">
        {questionOptions.map((option) => {
          return (
            <OptionCard
              key={option.question_options_id}
              option={option}
              isSelected={selectedOptionId === option.question_options_id}
              onSelect={handleSelectOption}
            />
          );
        })}
        {error ? <p>{error}</p> : null}
        <button onClick={handleNextQuestion}>Next</button>
      </ul>
    </div>
  );
};

export default Questions;
