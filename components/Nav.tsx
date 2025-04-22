import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useClerk,
} from "@clerk/clerk-react";

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
      <div>
        <SignedOut>
          <SignInButton {...({
    mode: "modal",
    redirectUrl: "/homepage",
  } as any)}>
            <button>Sign In</button>
          </SignInButton>
          <SignUpButton {...({
    mode: "modal",
    redirectUrl: "/homepage",
  } as any)}>
            <button>Sign Up</button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
          <button onClick={handleSignOut}>Sign Out</button>
        </SignedIn>
      </div>

      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/homepage">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/files/upload">
              <button>Generate a Quiz</button>
            </Link>
          </li>
          <li>
            <Link to="/questions">
              <button>Quiz</button>
            </Link>
          </li>
          <li>
            <Link to="/results">
              <button>My Results</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
