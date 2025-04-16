import { Link } from 'react-router-dom';
import Header from './Header';

function Nav() {
  return (
    <>
    <Header />
    
    <nav className="nav-bar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quizzes">Quiz</Link></li>
        <li><Link to="/result">My Results</Link></li>
      </ul>
    </nav>
    </>
  );
}

export default Nav;
