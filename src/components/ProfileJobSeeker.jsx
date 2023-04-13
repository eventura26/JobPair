import { useState } from "react";
import { UpdateJobSeekerProfile } from "../services/Profiles";
import { useNavigate } from "react-router-dom";

export default function RegisterJobSeeker(props) {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    user_id: "",
    about: "",
    photo: "",
    currently_employed: "",
    current_job_title: "",
    seeking_role: "",
    job_field: "",
    website: "",
    linkedin: "",
    desired_role: "",
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
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await UpdateJobSeekerProfile({
      user_id: props.user_id,
      about: formValues.about,
      photo: formValues.photo,
      currently_employed: formValues.currently_employed,
      current_job_title: formValues.current_job_title,
      seeking_role: formValues.seeking_role,
      job_field: formValues.job_field,
      website: formValues.website,
      linkedin: formValues.linkedin,
      desired_role: formValues.desired_role,
      skills: formValues.skills,
      experience_years: formValues.experience_years,
      desired_salary: formValues.desired_salary,
    });
    
    setFormValues({
      about: "",
      photo: "",
      currently_employed: "",
      current_job_title: "",
      seeking_role: "",
      job_field: "",
      website: "",
      linkedin: "",
      desired_role: "",
      skills: "",
      experience_years: "",
      desired_salary: "",
    });
    navigate("/");
  };

  return (
    <div>
      <form className="recruiter-profile" onSubmit={handleSubmit}>
        <label htmlFor="about">about me</label>
        <input
          onChange={handleChange}
          name="about"
          type="text-field"
          value={formValues.about}
          required
        />
        <label htmlFor="photo">photo</label>
        <input
          onChange={handleChange}
          name="photo"
          type="text"
          value={formValues.photo}
        />
        <label htmlFor="currently_employed">Currently Employed</label>
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
        <input
          onChange={handleChange}
          name="website"
          type="text"
          value={formValues.website}
        />
        <label htmlFor="linkedin">linkedin</label>
        <input
          onChange={handleChange}
          name="linkedin"
          type="text"
          value={formValues.linkedin}
        />
        <label htmlFor="job_field">Job Field</label>
        <select
          name="job_field"
          id="job_field"
          value={formValues.job_field}
          onChange={handleChange}
          required
        >
          <option value="">Select Job Field</option>
          {JOB_FIELDS.map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <label htmlFor="current_job_title">Current Job Title</label>
        <input
          onChange={handleChange}
          name="current_job_title"
          type="text"
          value={formValues.current_job_title}
          required
        />
        <label htmlFor="seeking_role">Looking for someone who is a:</label>
        <input
          onChange={handleChange}
          name="seeking_role"
          type="text"
          value={formValues.seeking_role}
          required
        />
        <label htmlFor="skills">what skills?</label>
        <input
          onChange={handleChange}
          name="skills"
          type="text"
          value={formValues.skills}
          required
        />
        <label htmlFor="experience_years">
          how many years of experience are you looking for
        </label>
        <input
          onChange={handleChange}
          name="experience_years"
          type="text"
          value={formValues.experience_years}
          required
        />
        <label htmlFor="desired_salary">whats the job pay?</label>
        <input
          onChange={handleChange}
          name="desired_salary"
          type="text"
          value={formValues.desired_salary}
          required
        />
        <input type="submit" value="create account" />
      </form>
    </div>
  );
}
