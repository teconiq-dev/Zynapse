export function TeamMemberRegistration({ member, teamData, handleChange }) {
  const memberData = teamData.find((data) => data.member === member) || {};

  return (
    <div>
      <h2>Member {member}</h2>
      <div className="form-control">
        <label className="label" htmlFor={`fullName-${member}`}>
          <span className="label-text">Full Name</span>
        </label>
        <input
          type="text"
          id={`fullName-${member}`}
          name="fullName"
          value={memberData.fullName || ""}
          onChange={(e) => handleChange(e, member)}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor={`email-${member}`}>
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          id={`email-${member}`}
          name="email"
          value={memberData.email || ""}
          onChange={(e) => handleChange(e, member)}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor={`phoneNo-${member}`}>
          <span className="label-text">Phone Number</span>
        </label>
        <input
          type="text"
          id={`phoneNo-${member}`}
          name="phoneNo"
          value={memberData.phoneNo || ""}
          onChange={(e) => handleChange(e, member)}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor={`collegeName-${member}`}>
          <span className="label-text">College Name</span>
        </label>
        <input
          type="text"
          id={`collegeName-${member}`}
          name="collegeName"
          value={memberData.collegeName || ""}
          onChange={(e) => handleChange(e, member)}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor={`course-${member}`}>
          <span className="label-text">Course</span>
        </label>
        <input
          type="text"
          id={`course-${member}`}
          name="course"
          value={memberData.course || ""}
          onChange={(e) => handleChange(e, member)}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor={`yearOfStudy-${member}`}>
          <span className="label-text">Year of Study</span>
        </label>
        <select
          id={`yearOfStudy-${member}`}
          name="yearOfStudy"
          value={memberData.yearOfStudy || ""}
          onChange={(e) => handleChange(e, member)}
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
    </div>
  );
}
