
import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const CreateAccount: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-white">
      <SignUp redirectUrl="/login" />
    </div>
  );
};

export default CreateAccount;
