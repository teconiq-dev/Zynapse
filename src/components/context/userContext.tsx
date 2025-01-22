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
type UserRegistration = {
  fullName: string;
  phoneNo: string;
  collegeName: string;
  course: string;
  yearOfStudy: string;
  paymentNo?: string;
};
export type TeamDetails = UserRegistration & {
  email: string;
  member: number;
};
export type RegistrationDetails = UserRegistration & {
  event: string[];
  hackathon: TeamDetails[];
  relayCoding: TeamDetails[];
  techQuiz: TeamDetails[];
  bgmi: TeamDetails[];
  workshops: string[];
};

const UserContext = createContext<UserContextType | null>(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [registrationDetails, setRegistrationDetails] =
    useState<RegistrationDetails | null>({
      fullName: "",
      phoneNo: "",
      collegeName: "",
      course: "",
      yearOfStudy: "",
      event: [],
      hackathon: [],
      relayCoding: [],
      techQuiz: [],
      bgmi: [],
      workshops: [],
    });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (data) => {
      if (data) {
        setUser(data);
        try {
          const details = await getDetails(user.email);
          setRegistrationDetails({
            fullName: details?.fullName || "",
            phoneNo: details?.phoneNo || "",
            event: details?.event || [],
            collegeName: details?.collegeName || "",
            course: details?.course || "",
            yearOfStudy: details?.yearOfStudy || "",
            hackathon: details?.hackathon || [],
            relayCoding: details?.relayCoding || [],
            techQuiz: details?.techQuiz || [],
            bgmi: details?.bgmi || [],
            workshops: details?.workshops || [],
          });
          setLoading(false);
        } catch (error) {
          console.error("Error fetching details: ", error);
        }
      } else {
        setUser(null);
        setRegistrationDetails(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [user]);

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
