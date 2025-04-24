import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../src/SplashScreen.css';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/homepage');
    }, 5000); // 2.5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen d-flex justify-content-center align-items-center vh-40">
      <img className="logo-front" src="../src/assets/tranparentlogo.png" alt="logo-img" />
    
    </div>
  );
};

export default SplashScreen;
