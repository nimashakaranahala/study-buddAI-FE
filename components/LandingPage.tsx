
import React from 'react';
import AccountSection from './AccountSection';
import '../src/assets/styles.css'

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div>
  
      <main>
        <AccountSection />
      </main>

    </div>
  );
};

export default LandingPage;