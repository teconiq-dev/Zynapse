"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "firebase/auth";
import { auth } from "../backend/firebase";
import { getDetails } from "@/components/backend/firebase";

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  registrationDetails: any;
  setRegistrationDetails: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
type RegistrationDetails = {
  fullName: string;
  phoneNo: string;
  event: string[];
  collegeName: string;
  course: string;
  yearOfStudy: string;
};

const UserContext = createContext<UserContextType | null>(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [registrationDetails, setRegistrationDetails] =
    useState<RegistrationDetails>({
      fullName: "",
      phoneNo: "",
      event: [""],
      collegeName: "",
      course: "",
      yearOfStudy: "",
    });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        try {
          const details = await getDetails(user.email!);
          setRegistrationDetails({
            fullName: details?.fullName || "",
            phoneNo: details?.phoneNo || "",
            event: details?.event || [""],
            collegeName: details?.collegeName || "",
            course: details?.course || "",
            yearOfStudy: details?.yearOfStudy || "",
          });
          setLoading(false);
        } catch (error) {
          console.error("Error fetching details: ", error);
        }
      } else {
        setUser(null);
        setRegistrationDetails({
          fullName: "",
          phoneNo: "",
          event: [""],
          collegeName: "",
          course: "",
          yearOfStudy: "",
        });
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        registrationDetails,
        setRegistrationDetails,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export const UserDetails = () => {
  return useContext(UserContext);
};
