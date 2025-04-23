import React, { useContext } from "react";
import { UserContext } from "../src/contexts/User";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";
import NavBarOtherPages from "./NavBarOtherPages"



const Header: React.FC = () => {
  // Access the context
  const context = useContext(UserContext);
  const location = useLocation();
  const hideOnRoutes = ["/","/login", "/createaccount"];
  const shouldShowUserProfile = !hideOnRoutes.includes(location.pathname);


  if (!context) {
    return <h1 className="title">Study BuddAI LOGO</h1>;
  }

  // const { loggedInUser } = context;

  return (
    <div className="header-container text-white py-4 ">
      {shouldShowUserProfile && (
        <div className="userProfile">
          <SignedOut>
            <SignInButton mode="modal" redirectUrl="/homepage">
              <button>Sign In</button>
            </SignInButton>
            <SignUpButton mode="modal" redirectUrl="/homepage">
              <button>Sign Up</button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
      <img className="logo" src="../src/assets/logo.png" />
      {/* <h2>Welcome {loggedInUser.username}</h2> */}
      <NavBarOtherPages />
    </div>
  );
};

export default Header;
