"use client";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/components/backend/firebase";
import { UserDetails } from "@/components/context/userContext";

export default function RegisterPage() {
  const { user } = UserDetails();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    event: "",
    collegeName: "",
    course: "",
    yearOfStudy: "",
  });

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
      await setDoc(doc(db, "registrations", user?.email), formData);
      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-start w-full h-full">
      <h1 className="text-2xl font-bold mb-4">Registration</h1>
      <div className="divider divider-primary">Zynapse</div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-4xl p-4 md:p-6 shadow-md shadow-primary rounded-lg"
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
            <span className="label-text">Event</span>
          </label>
          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
            className="select select-bordered"
            required
          >
            <option value="" disabled>
              Select Event
            </option>
            <option value="hackathon">Hackathon</option>
            <option value="AR Treasure Hunt">AR Treasure Hunt</option>
            <option value="Debugging">Debugging</option>
            <option value="Web Development">Web Development</option>
            <option value="Relay Coding">Relay Coding</option>
            <option value="Tech Quiz">Tech Quiz</option>
            <option value="PPT Presentation">PPT Presentation</option>
          </select>
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
          <input
            type="number"
            name="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
