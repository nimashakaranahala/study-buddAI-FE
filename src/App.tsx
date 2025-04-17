import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from '../components/HomePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landingpage from '../components/LandingPage';
import Login from '../components/Login'
import CreateAccount from '../components/CreateAccount'
import Questions from '../components/Questions'
import Results from "../components/Results"

function App() {
  return (
    <>
    <header>
      <title>Study BuddAI</title>
    </header>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/createaccount" element={<CreateAccount/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/results" element={<Results />} />
        </Routes>
        <Footer /> 
      </div>
    </>
  );
}

export default App;

