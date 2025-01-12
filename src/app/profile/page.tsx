"use client";
import { UserDetails } from "@/components/context/userContext";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Profile() {
  const { user, registrationDetails } = UserDetails() || {};

  return (
    <div className="w-full h-full px-4">
      {registrationDetails.fullName.length === 0 ? (
        <div className="text-center text-xl text-red-500">Register first</div>
      ) : (
        <div className="flex flex-col gap-8 max-w-5xl mx-auto bg-background p-8 rounded-xl shadow-lg shadow-primary">
          <h1 className="text-3xl md:text-5xl text-center font-bold font-monoton">
            Profile
          </h1>
          <div className="flex flex-col items-start gap-3 mb-5 pl-5">
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
            <div>
              <span className="badge">Name: </span>{" "}
              {registrationDetails.fullName}
            </div>
            <div>
              <span className="badge">Email: </span> {user.email}
            </div>
            <div>
              <span className="badge">Phone No: </span>{" "}
              {registrationDetails.phoneNo}
            </div>
          </div>
          <div className="divider divider-secondary"></div>
          <h2 className="text-3xl font-audioWide text-center">
            Registered Events
          </h2>
          <div className="flex flex-wrap items-start justify-evenly gap-8">
            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Competition:</h2>
                <ul className="mt-4">
                  {registrationDetails.event.map(
                    (event: string, key: number) => (
                      <li key={key} className="text-lg font-exo2">
                        <ChevronRight className="inline" />
                        {event}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
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
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Team Events:</h2>
                <div className="flex flex-wrap gap-4">
                  <div className="mt-4">
                    {registrationDetails.hackathon.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold">Hackathon</h4>
                        <ul className="mt-2">
                          {registrationDetails.hackathon.map(
                            (member, key: number) => (
                              <li key={key} className="text-lg font-exo2">
                                <ChevronRight className="inline" />
                                {member.fullName}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                    {registrationDetails.relayCoding.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold">Relay Coding</h4>
                        <ul className="mt-2">
                          {registrationDetails.relayCoding.map(
                            (member, key: number) => (
                              <li key={key} className="text-lg font-exo2">
                                <ChevronRight className="inline" />
                                {member.fullName}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                    {registrationDetails.techQuiz.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold">Tech Quiz</h4>
                        <ul className="list-disc list-inside mt-2">
                          {registrationDetails.techQuiz.map(
                            (member, key: number) => (
                              <li key={key} className="text-lg font-exo2">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
