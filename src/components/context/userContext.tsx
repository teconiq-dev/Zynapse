"use client";
import { createContext, useContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "firebase/auth";
import { auth } from "../backend/firebase";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState<null | User>(null);

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
