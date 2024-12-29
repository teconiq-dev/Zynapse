"use client";
import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
export const UserDetails = () => {
  return useContext(UserContext);
};
