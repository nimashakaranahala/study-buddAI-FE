import { Link } from "react-router-dom";
import { useClerk} from "@clerk/clerk-react";

function Nav() {
  const { signOut } = useClerk();

  // Sign out handler to redirect user to the home page after signing out
  const handleSignOut = () => {
    signOut(() => {
      // After signing out, redirect the user to the landing page
      window.location.href = "/";
    });
  };

  return (
    <>
      <nav className="nav-bar">
        <ul>
 
          <li>
            <Link to="/files/upload">
              <button>Generate a Quiz</button>
            </Link>
          </li>
          <li>
            <Link to="/quizzes">
              <button>Quizzes</button>
            </Link>
          </li>

          <li>
            <button onClick={handleSignOut}>Sign Out</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
