import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from '../components/HomePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landingpage from '../components/LandingPage';
import Login from '../components/Login'
import CreateAccount from '../components/CreateAccount'
import Form from '../components/Form'
import Questions from '../components/Questions'
import Results from "../components/Results"
import {UserProvider} from "./contexts/User"
import {SignedIn, SignedOut, SignIn, SignUp, RedirectToSignIn} from '@clerk/clerk-react';



function App() {
  return (
    <>
     <UserProvider>
    <header>
      <title>Study BuddAI</title>
    </header>
     
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/homepage" element={
            <>
            <SignedIn>
              <Homepage />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn redirectUrl="/login" />
            </SignedOut>
          </> }
        />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/files/upload" element={<Form />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/results" element={<Results />} />
            
        </Routes>
        </main>
        <Footer /> 
  
      </UserProvider>
    </>
  );
}

export default App;

