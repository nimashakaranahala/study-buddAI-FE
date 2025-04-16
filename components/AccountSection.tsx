import React from 'react';
import { Link } from 'react-router-dom'; 

interface AccountSectionProps {}

const AccountSection: React.FC<AccountSectionProps> = () => {
  return (
    <section className="account-section">
      <Link to="/create-account">
        <button>Create Account</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </section>
  );
};

export default AccountSection;