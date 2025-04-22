import React from 'react';
import { Link } from 'react-router-dom';

const AccountSection: React.FC = () => {
  return (
    <section className="account-section" style={{ textAlign: "center", marginTop: "2rem" }}>
      <Link to="/createaccount">
        <button>Create Account</button>
      </Link>
      <Link to="/login" style={{ marginLeft: "1rem" }}>
        <button>Login</button>
      </Link>
    </section>
  );
};

export default AccountSection;
