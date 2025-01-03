"use client";
import { createContext, useContext, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { User } from "firebase/auth";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState<null | User>(null);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
export const UserDetails = () => {
  return useContext(UserContext);
};
