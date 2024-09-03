import { createContext, useState } from "react";

type UserProviderProps = {
  children: React.ReactNode;
};

type ContextType = {
  currentUser: object;
  setUser: (value: object) => void;
};

const UserContext = createContext<ContextType>({ currentUser: {}, setUser(value) {} });

const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState({});

  const setUser = (user: {}) => {
    setCurrentUser(user);
  };

  return <UserContext.Provider value={{ currentUser, setUser }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
