
import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-white">
      <SignIn redirectUrl="/homepage" />
    </div>
  );
};

export default Login;
