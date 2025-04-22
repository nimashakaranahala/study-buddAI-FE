import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/quizzes">
              <button>Quiz</button>
            </Link>
          </li>
          <li>
            <Link to="/result">
              <button>My Results</button>
            </Link>
          </li>
          <li>
            <Link to="/files/upload">
              <button>Generate a Quiz</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
