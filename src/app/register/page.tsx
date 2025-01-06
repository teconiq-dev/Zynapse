"use client";
import { useState } from "react";
import { createDetails, getDetails } from "@/components/backend/firebase";
import { useRouter } from "next/navigation";
import { UserDetails } from "@/components/context/userContext";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function RegisterPage() {
  const { user, registrationDetails, setRegistrationDetails } = UserDetails();
  const router = useRouter();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(registrationDetails || {});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      console.error("User is not authenticated");
      return;
    }
    try {
      await createDetails(user?.email, {
        ...formData,
      });
      console.log("Document successfully written!");
      setSubmitted(true);
      const details = await getDetails(user.email!);
      setRegistrationDetails(details);
      setTimeout(() => router.push("/competitions"), 3000);
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-start w-full h-full">
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/register_bg.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality="100"
        />
      </div>
      <div className="relative z-10 bg-opacity-75">
        {!user ? (
          <>
            <h2 className="text-2xl md:text-6xl font-exo2 my-20">
              Please Sign in to register events
            </h2>
          </>
        ) : registrationDetails.fullName ? (
          <div className="backdrop-blur-md bg-base-100/10 p-5 border border-primary rounded-md">
            <h2 className="text-2xl md:text-6xl font-exo2 my-20">
              Already Registered! Heads up to events page.
            </h2>
          </div>
        ) : (
          <>
            <h1 className="text-2xl md:text-6xl font-monoton mb-14">
              Registration
            </h1>
            <AnimatedGradientText>
              😌 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                )}
              >
                You can select events after registration.
              </span>
              <CircleAlert className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>

            <AnimatedGradientText>
              🙂 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                )}
              >
                For team-based events, members registration will be on events
                page.
              </span>
              <CircleAlert className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>

            <div className="divider divider-primary">
              Participant Registration
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 max-w-4xl p-4 md:p-8 lg:p-14 shadow-md shadow-primary rounded-lg backdrop-blur-sm bg-gradient-to-r from-fuchsia-700/10 to-purple-600/20"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">College Name</span>
                </label>
                <input
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Course</span>
                </label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Year of Study</span>
                </label>
                <select
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  className="select select-bordered"
                  required
                >
                  <option value="" disabled>
                    Select Year
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
            {submitted && (
              <div className="toast toast-end">
                <div className="alert alert-success">
                  <span>Registered Successfully</span>
                </div>{" "}
                <div className="alert alert-info">
                  <span>Now you can register for events</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
