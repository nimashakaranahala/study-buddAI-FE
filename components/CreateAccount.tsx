import React from 'react';

interface CreateAccountProps {}

const CreateAccount: React.FC<CreateAccountProps> = () => {
  return (
    <div>
      <h2>Create Account</h2>
      {/* Add your create account form or content here */}
      <button onClick={() => console.log('Create Account Submit')}>
        Create Accountt
      </button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default CreateAccount;