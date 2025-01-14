"use client";
import { UserDetails } from "@/components/context/userContext";
import { useRouter } from "next/navigation";
import { ChevronRight, Mail, Phone, User, UserRound } from "lucide-react";
import Image from "next/image";
import { TextAnimation } from "@/components/TextAnimation";
import { AnimationContainer } from "@/components/AnimationContainer";

export default function Profile() {
  const { user, registrationDetails } = UserDetails() || {};
  const router = useRouter();
  if (registrationDetails?.fullName.length === 0) {
    router.push("/register");
  }

  return (
    <div className="w-full h-full px-4">
      {registrationDetails?.fullName.length === 0 ? (
        <div className="text-center text-2xl mt-24 text-red-500">
          Please get yourself registered first!
        </div>
      ) : (
        <div className="flex flex-col gap-8 max-w-5xl mx-auto bg-background p-4 md:p-10 rounded-xl shadow-md shadow-primary">
          <TextAnimation mode="slideInTop">
            <h1 className="text-3xl md:text-5xl text-center font-bold font-monoton my-4">
              Profile
            </h1>
          </TextAnimation>
          <div className="flex justify-center md:justify-start items-start flex-wrap gap-6 mb-5 md:pl-5">
            <div>
              <div className="avatar online">
                <div className="w-24 rounded-full ring-primary ring-offset-base-100 ring ring-offset-2">
                  <Image
                    src={user?.photoURL}
                    alt="avatar"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              <div>
                <TextAnimation mode="slideInRight">
                  <UserRound className="inline" />
                  <span className="badge">{registrationDetails.fullName}</span>
                </TextAnimation>
              </div>
              <div>
                <TextAnimation mode="slideInRight">
                  <Mail className="inline" />
                  <span className="badge">{user?.email}</span>
                </TextAnimation>
              </div>
              <div>
                <TextAnimation mode="slideInRight">
                  <Phone className="inline" />
                  <span className="badge">{registrationDetails.phoneNo}</span>
                </TextAnimation>
              </div>
            </div>
          </div>
          <div className="divider divider-secondary"></div>
          <h2 className="text-3xl font-audioWide text-center">
            Registered Events
          </h2>
          <div className="flex flex-wrap items-start justify-evenly gap-8">
            <div className="card bg-base-100 w-96 shadow-xl">
              <AnimationContainer mode="slideInBottom" index={1}>
                <div className="card-body">
                  <h2 className="card-title">Competition:</h2>
                  <ul className="mt-4">
                    {registrationDetails.event.map(
                      (event: string, key: number) => (
                        <li className="text-lg font-exo2" key={key}>
                          <ChevronRight className="inline" />
                          {event}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </AnimationContainer>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
              <AnimationContainer mode="slideInBottom" index={2}>
                <div className="card-body">
                  <h2 className="card-title">Workshops:</h2>
                  <ul className="mt-4">
                    {registrationDetails.workshops.map(
                      (workshop: string, key: number) => (
                        <li key={key} className="text-lg font-exo2">
                          <ChevronRight className="inline" />
                          {workshop}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </AnimationContainer>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
              <AnimationContainer mode="slideInBottom" index={3}>
                <div className="card-body">
                  <h2 className="card-title">Team Events:</h2>
                  <div className="flex flex-wrap gap-4">
                    <div className="mt-4">
                      {registrationDetails.hackathon.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold">Hackathon</h4>
                          <ul className="mt-2">
                            {registrationDetails.hackathon.map(
                              (member, key: number) => (
                                <li key={key} className="text-lg font-exo2">
                                  <User className="inline" />
                                  {member.fullName}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}
                      {registrationDetails.relayCoding.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold">
                            Relay Coding
                          </h4>
                          <ul className="mt-2">
                            {registrationDetails.relayCoding.map(
                              (member, key: number) => (
                                <li key={key} className="text-lg font-exo2">
                                  <User className="inline" />
                                  {member.fullName}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}
                      {registrationDetails.techQuiz.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold">Tech Quiz</h4>
                          <ul className="mt-2">
                            {registrationDetails.techQuiz.map(
                              (member, key: number) => (
                                <li key={key} className="text-lg font-exo2">
                                  <User className="inline" />
                                  {member.fullName}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimationContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
