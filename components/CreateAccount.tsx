
import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const CreateAccount: React.FC = () => {
  return (
    <div>
      <SignUp redirectUrl="/login" />
    </div>
  );
};

export default CreateAccount;
