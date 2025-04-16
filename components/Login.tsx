import React from 'react';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div>
      <h2>Login</h2>
      {/* Add your login form or content here */}
      <button onClick={() => console.log('Login Submit')}>Login</button>
      
      <p>Don't have an account?  <a href="/createaccount">Create Account</a></p>
    </div>
  );
};

export default Login;