import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from '../components/HomePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landingpage from '../components/LandingPage';
import Login from '../components/Login'
import CreateAccount from '../components/CreateAccount'
import UploadFile from '../components/UploadFile'
import Questions from '../components/Questions'
import Results from "../components/Results"
import {UserProvider} from "./contexts/User"


function App() {
  return (
    <>
     <UserProvider>
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
          <Route path="/files/upload" element={<UploadFile />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/results" element={<Results />} />

        </Routes>
        <Footer /> 
      </div>
      </UserProvider>
    </>
  );
}

export default App;

