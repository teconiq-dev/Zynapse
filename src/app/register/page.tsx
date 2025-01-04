"use client";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/components/backend/firebase";
import { useRouter } from "next/navigation";
import { UserDetails } from "@/components/context/userContext";

export default function RegisterPage() {
  const { user, registrationDetails } = UserDetails();
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
    // console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      console.error("User is not authenticated");
      return;
    }
    try {
      await setDoc(doc(db, "registrations", user?.email), {
        ...formData,
      });
      console.log("Document successfully written!");
      setSubmitted(true);
      router.push("/events");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-start w-full h-full">
      {!user ? (
        <>
          <h2 className="text-2xl md:text-6xl font-exo2 my-20">
            Please Sign in to register events
          </h2>
        </>
      ) : (
        <>
          <h1 className="text-2xl md:text-6xl font-monoton mb-14">
            Registration
          </h1>
          <div className="divider divider-primary">
            Participant Registration
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-4xl p-4 md:p-8 lg:p-14 shadow-md shadow-primary rounded-lg bg-gradient-to-r from-fuchsia-700/10 to-purple-600/20"
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
  );
}
