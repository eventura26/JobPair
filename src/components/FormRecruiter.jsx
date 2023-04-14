import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CreateRecruiterProfile } from "../services/Profiles";
export default function FormRecruiter() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [formValues, setFormValues] = useState({
    user_id: id,
    about: "",
    photo: "",
    company: "",
    website: "",
    linkedin: "",
    job_field: "",
    desired_role: "",
    desired_skills: "",
    desired_experience_years: "",
    salary_offered: "",
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
    await CreateRecruiterProfile(formValues);
    navigate("/");
  };

  return (
    <div>
      <div className="profile-form">
        <form className="account-profile" onSubmit={handleSubmit}>
          <label htmlFor="about">about me</label>
          <input onChange={handleChange} name="about" type="text" required />
          <label htmlFor="photo">photo</label>
          <input onChange={handleChange} name="photo" type="text" />
          <label htmlFor="company">current company</label>
          <input onChange={handleChange} name="company" type="text" required />
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
          <label htmlFor="desired_role">looking someone who is a:</label>
          <input
            onChange={handleChange}
            name="desired_role"
            type="text"
            required
          />
          <label htmlFor="desired_skills">what skills?</label>
          <input
            onChange={handleChange}
            name="desired_skills"
            type="text"
            required
          />
          <label htmlFor="desired_experience_years">
            how many years of experience are you looking for
          </label>
          <input
            onChange={handleChange}
            name="desired_experience_years"
            type="text"
            required
          />
          <label htmlFor="salary_offered">whats the job pay?</label>
          <input
            onChange={handleChange}
            name="salary_offered"
            type="text"
            required
          />
          <input type="submit" value="create profile" />
        </form>
      </div>
    </div>
  );
}
