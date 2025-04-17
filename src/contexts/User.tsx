import React, { createContext, useState, ReactNode } from "react";

interface User {
  user_id: number;
  username: string;
}
interface UserContextType {
  loggedInUser: User;
  setLoggedInUser: React.Dispatch<React.SetStateAction<User>>;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

    //update when users logs in 
  const [loggedInUser, setLoggedInUser] = useState<User>({
    user_id: 1,
    username: "User 123",
  });

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
