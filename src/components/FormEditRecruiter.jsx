import { useState } from "react";
import { updateRecruiterProfile } from "../services/Profiles";
import { useNavigate } from "react-router-dom";

export default function FormEditRecruiter(props) {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    user_id: props.profile.user_id,
    about: props.profile.about,
    photo: props.profile.photo,
    company: props.profile.company,
    website: props.profile.website,
    linkedin: props.profile.linkedin,
    job_field: props.profile.job_field,
    desired_role: props.profile.desired_role,
    desired_skills: props.profile.desired_skills,
    desired_experience_years: props.profile.desired_experience_years,
    salary_offered: props.profile.salary_offered,
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
    await updateRecruiterProfile(props.profile.id, formValues);
    console.log(formValues)
    navigate(`/network/recruiters/${props.profile.user_id}`);
  };

  return (
    <div>
      <div className="profile-form">
        <form className="account-profile" onSubmit={handleSubmit}>
          <label htmlFor="about">about me</label>
          <input 
            onChange={handleChange} 
            name="about" 
            type="text"
            value={formValues.about}
            required />
          <label htmlFor="photo">photo</label>
          <input 
            onChange={handleChange} 
            name="photo" 
            type="text"
            value={formValues.photo}
          />
          <label htmlFor="company">current company</label>
          <input 
              onChange={handleChange} 
              name="company" 
              type="text"   
              value={formValues.company}
              required />
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
            onChange={handleChange}
            value={formValues.job_field}
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
            value={formValues.desired_role}
            required
          />
          <label htmlFor="desired_skills">what skills?</label>
          <input
            onChange={handleChange}
            name="desired_skills"
            type="text"
            value={formValues.desired_skills}
            required
          />
          <label htmlFor="desired_experience_years">
            how many years of experience are you looking for
          </label>
          <input
            onChange={handleChange}
            name="desired_experience_years"
            type="text"
            value={formValues.desired_experience_years}
            required
          />
          <label htmlFor="salary_offered">whats the job pay?</label>
          <input
            onChange={handleChange}
            name="salary_offered"
            type="text"
            value={formValues.salary_offered}
            required
          />
          <input type="submit" value="update profile" />
        </form>
      </div>
    </div>
  );
}
