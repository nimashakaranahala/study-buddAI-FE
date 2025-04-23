
import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const CreateAccount: React.FC = () => {
  return (
    <div className='createaccount'>
      <SignUp redirectUrl="/login" />
    </div>
  );
};

export default CreateAccount;
