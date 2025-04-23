// TryAgain.tsx
import React from 'react';
import Lottie from 'lottie-react';
import sadFace from '../src/assets/bad_score.json'; // 👈 Replace with your animation

const TryAgain: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;
  return <Lottie animationData={sadFace} loop autoplay className="tryagain-animation" />;
};

export default TryAgain;
