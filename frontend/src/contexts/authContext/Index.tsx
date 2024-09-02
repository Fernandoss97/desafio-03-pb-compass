import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, Auth } from "firebase/auth";
import { auth } from "../../firebase/firebase";

type ContextType = {
  currentUser: currentUserType | null;
  userLoggedIn: boolean;
  loading: boolean;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export type currentUserType = {
  uid: string;
  displayName: string;
  email: string;
};

const AuthContext = React.createContext<ContextType>({
  currentUser: null,
  loading: false,
  userLoggedIn: false,
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<currentUserType | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user: any) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  const value = { currentUser, userLoggedIn, loading };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
