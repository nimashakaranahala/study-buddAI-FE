import React from 'react';

interface Option {
  question_options_id: number;
  question_id: number;
  option_body: string;
  is_correct: number;
  label: string;
}

interface OptionCardProps {
  option: Option;
  isSelected: boolean;
  onSelect: (optionId: number) => void;
}

const OptionCard: React.FC<OptionCardProps> = ({ option, isSelected, onSelect }) => {
  return (
    <li
      className={`question-option-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(option.question_options_id)}
    >
  
      <p className='option-body'>{option.option_body}</p>
    </li>
  );
};

export default OptionCard;
