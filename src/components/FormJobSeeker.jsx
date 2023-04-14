import { useState } from "react";
import { CreateJobSeekerProfile } from "../services/Profiles";
import { useNavigate, useParams } from "react-router-dom";

export default function FormJobSeeker() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formValues, setFormValues] = useState({
    user_id: id,
    about: "",
    photo: "",
    currently_employed: false,
    current_job_title: "",
    seeking_role: "",
    job_field: "",
    website: "",
    linkedin: "",
    skills: "",
    experience_years: "",
    desired_salary: "",
  });

  const JOB_FIELDS = [
    ["tech", "Technology"],
    ["health", "Healthcare"],
    ["finance", "Finance"],
    ["education", "Education"],
    ["marketing", "Marketing"],
    ["sales", "Sales"],
    ["hr", "Human Resources"],
    ["design", "Design"],
    ["construction", "Construction"],
    ["hospitality", "Hospitality"],
    ["logistics", "Logistics"],
    ["legal", "Legal"],
    ["nonprofit", "Non-profit"],
    ["government", "Government"],
    ["science", "Science"],
    ["research", "Research"],
    ["media", "Media"],
    ["entertainment", "Entertainment"],
    ["sports", "Sports"],
    ["arts", "Arts"],
    ["agriculture", "Agriculture"],
    ["energy", "Energy"],
    ["environmental", "Environmental"],
  ];

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CreateJobSeekerProfile(formValues);
    navigate("/");
  };

  return (
    <div>
      <div className="profile-form">
        <form className="account-profile" onSubmit={handleSubmit}>
          <label htmlFor="about">About me:</label>
          <input onChange={handleChange} name="about" type="text" required />
          <label htmlFor="photo">photo</label>
          <input onChange={handleChange} name="photo" type="text" />
          <label htmlFor="currently_employed">Currently Employed?</label>
          <input
            name="currently_employed"
            type="checkbox"
            checked={formValues.currently_employed}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                currently_employed: e.target.checked,
              })
            }
          />
          <label htmlFor="website">website</label>
          <input onChange={handleChange} name="website" type="text" />
          <label htmlFor="linkedin">linkedin</label>
          <input onChange={handleChange} name="linkedin" type="text" />
          <label htmlFor="job_field">Job Field</label>
          <select
            name="job_field"
            id="job_field"
            onChange={handleChange}
            required
          >
            <option value="">Select Job Field</option>
            {JOB_FIELDS.map(([key, label]) => (
              <option key={key} value={label}>
                {label}
              </option>
            ))}
          </select>
          <label htmlFor="current_job_title">Current Job Title</label>
          <input
            onChange={handleChange}
            name="current_job_title"
            type="text"
            required
          />
          <label htmlFor="seeking_role">Role you're applying as:</label>
          <input
            onChange={handleChange}
            name="seeking_role"
            type="text"
            required
          />
          <label htmlFor="skills">what are some of your skills?</label>
          <input onChange={handleChange} name="skills" type="text" required />
          <label htmlFor="experience_years">
            how many years have you been doing this?
          </label>
          <input
            onChange={handleChange}
            name="experience_years"
            type="text"
            required
          />
          <label htmlFor="desired_salary">
            what salary are you looking for?
          </label>
          <input
            onChange={handleChange}
            name="desired_salary"
            type="text"
            required
          />
          <input type="submit" value="create account" />
        </form>
      </div>
    </div>
  );
}
