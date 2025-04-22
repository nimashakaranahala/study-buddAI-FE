import React, { useContext } from "react";
import { UserContext } from "../src/contexts/User";



const Header: React.FC = () => {
  // Access the context
  const context = useContext(UserContext);


  if (!context) {
    return <h1 className="title">Study BuddAI LOGO</h1>;
  }

  // const { loggedInUser } = context;

  return (
    <>
      {/* <h1 className="title">Study BuddAI LOGO</h1> */}
      <img className="logo" src="../src/assets/logo.png" />
      {/* <h2>Welcome {loggedInUser.username}</h2> */}
      {/* <Nav /> */}
    </>
  );
};

export default Header;
