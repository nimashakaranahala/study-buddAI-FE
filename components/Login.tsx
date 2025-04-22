
import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login: React.FC = () => {
  return (
    <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
      <SignIn redirectUrl="/homepage" />
    </div>
  );
};

export default Login;
