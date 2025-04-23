import React from 'react';
import trophy from '../src/assets/trophy.json'
import Lottie from 'lottie-react';

interface AwardProps {
    show:boolean
}
const Award:React.FC<AwardProps>=({show}) => {

    if (!show) return null
    return (
    <div className='award-animation'>
        <Lottie animationData={trophy} loop={false} autoplay={true}  />
        <h3 className="text-center text-xl font-semibold text-green-600">Well done you passed!</h3>
    </div>
    
    )
  }
  
  export default Award;
  