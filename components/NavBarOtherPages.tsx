import { Link } from "react-router-dom";


const NavBarOtherPages: React.FC = () => {
  return (
    <nav className="nav-bar-top">
      <ul className="d-flex justify-content-center align-items-center flex-wrap m-0 p-0">
        <li className="nav-item">
          <Link to="/homepage" className="nav-link text-white">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/files/upload" className="nav-link text-white">Generate Quiz</Link>
        </li>
        <li className="nav-item">
          <Link to="/questions" className="nav-link text-white">Quiz</Link>
        </li>
        <li className="nav-item">
          <Link to="/results" className="nav-link text-white">My Results</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarOtherPages;
