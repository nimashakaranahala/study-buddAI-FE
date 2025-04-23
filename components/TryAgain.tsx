// TryAgain.tsx
import React from 'react';
import Lottie from 'lottie-react';
import sadFace from '../src/assets/bad_score.json';

const TryAgain: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;
  return (
  <div className='sad-animation'>
  <Lottie animationData={sadFace} loop autoplay className="tryagain-animation" />
  </div>
  )
};

export default TryAgain;
