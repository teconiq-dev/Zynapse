"use client";
import { useState } from "react";
import { getDetails, updateDetails } from "@/components/backend/firebase";
import { useRouter } from "next/navigation";
import { TeamDetails, UserDetails } from "@/components/context/userContext";
import { TeamMemberRegistration } from "@/components/team-member-registration";
import { Payment } from "@/components/payment";
import Link from "next/link";

export default function HackathonRegistration() {
  const { user, registrationDetails, setRegistrationDetails } = UserDetails();
  const router = useRouter();
  const dataFilled = registrationDetails?.fullName.length > 0;

  const [showFourthMember, setShowFourthMember] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [paymentNumber, setPaymentNumber] = useState<string>("");
  const [usedRegisteredPhone, setUsedRegisteredPhone] = useState(true);
  const [teamData, setTeamData] = useState<TeamDetails[]>([
    {
      member: 2,
      fullName: "",
      email: "",
      phoneNo: "",
      collegeName: "",
      course: "",
      yearOfStudy: "",
    },
    {
      member: 3,
      fullName: "",
      email: "",
      phoneNo: "",
      collegeName: "",
      course: "",
      yearOfStudy: "",
    },
  ]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    member: number,
  ) => {
    const { name, value } = e.target;
    setTeamData((prevData) =>
      prevData.map((data) =>
        data.member === member ? { ...data, [name]: value } : data,
      ),
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      console.error("User is not authenticated");
      return;
    }
    try {
      const newEvent = {
        hackathon: teamData,
        paymentNumber: usedRegisteredPhone
          ? registrationDetails.phoneNo
          : paymentNumber,
      };
      await updateDetails(user.email, newEvent)
        .then(async () => {
          const details = await getDetails(user.email!);
          setRegistrationDetails(details);
        })
        .then(() => {
          setSubmitted(true);
          router.push("/competitions");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    } catch (error) {
      console.error("Error in handleSubmit: ", error);
    }
  };

  const handleDelete = () => {
    setTeamData((prevData) => prevData.filter((data) => data.member !== 4));
    setShowFourthMember(false);
  };

  const addMember = () => {
    setTeamData((prevData) => [
      ...prevData,
      {
        member: 4,
        fullName: "",
        email: "",
        phoneNo: "",
        collegeName: "",
        course: "",
        yearOfStudy: "",
      },
    ]);
    setShowFourthMember(true);
  };

  return (
    <div className="z-20 container mx-auto p-4 flex flex-col items-center justify-start w-full h-full">
      {!user ? (
        <h2 className="text-2xl md:text-6xl font-exo2 my-20 z-20">
          Please signin to register for the event
        </h2>
      ) : (
        <>
          <h1 className="text-2xl md:text-6xl font-monoton mb-14 z-20">
            Hackathon
          </h1>
          {registrationDetails?.hackathon?.length > 0 ? (
            <h2 className="text-2xl md:text-6xl font-exo2 my-20 z-20">
              Already Registered!
            </h2>
          ) : !dataFilled ? (
            <h2 className="text-2xl md:text-6xl font-exo2 my-20 z-20">
              Please fill in your details{" "}
              <Link href="/register" className="btn-link">
                here
              </Link>{" "}
              before registration
            </h2>
          ) : (
            <>
              <div className="divider divider-primary z-20">
                Team Registration
              </div>
              <div className="relative z-10 bg-opacity-75 backdrop-blur-md">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8 max-w-4xl p-4 md:p-8 lg:p-14 shadow-md shadow-primary rounded-lg bg-gradient-to-r from-fuchsia-700/10 to-purple-600/20"
                >
                  <div className="form-control mt-6">
                    <h2 className="text-xl">Team Leader</h2>
                    <span className="text-secondary-foreground">
                      {registrationDetails.fullName}
                    </span>
                  </div>
                  {teamData.map((memberData) => (
                    <div key={memberData.member}>
                      <div className="divider divider-secondary"></div>
                      <TeamMemberRegistration
                        key={memberData.member}
                        member={memberData.member}
                        teamData={teamData}
                        handleChange={handleChange}
                      />
                    </div>
                  ))}
                  <div className="form-control mt-6">
                    {showFourthMember ? (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleDelete}
                      >
                        Delete Member
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={addMember}
                      >
                        Add Member
                      </button>
                    )}
                    <Payment count={teamData.length + 1} />
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">
                          Using your registered phone number for payment?
                        </span>
                        <input
                          type="checkbox"
                          className="checkbox ml-1"
                          checked={usedRegisteredPhone}
                          onChange={() =>
                            setUsedRegisteredPhone(!usedRegisteredPhone)
                          }
                        />
                      </label>
                    </div>

                    {!usedRegisteredPhone && (
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">
                            Phone number used for payment
                          </span>
                        </label>
                        <input
                          type="text"
                          name="paymentNumber"
                          value={paymentNumber}
                          onChange={(e) => setPaymentNumber(e.target.value)}
                          className="input input-bordered"
                          required
                        />
                      </div>
                    )}
                    <div className="divider-primary"></div>
                    <div className="form-control mt-6 space-y-2">
                      <label className="label">
                        <span className="text-purple-200">
                          Double check the details before submitting
                        </span>
                      </label>
                      <button type="submit" className="btn btn-primary">
                        Pay and Register
                      </button>
                    </div>
                  </div>
                </form>
                {submitted && (
                  <div className="toast toast-end">
                    <div className="alert alert-success">
                      <span>Registered Successfully</span>
                    </div>
                    <div className="alert alert-info">
                      <span>Now you can register for events</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
