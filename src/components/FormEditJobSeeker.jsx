import { useState } from "react";
import { updateJobSeekerProfile, DeleteJobSeekerProfile } from "../services/Profiles";
import { useNavigate } from "react-router-dom";

export default function FormEditJobSeeker(props) {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    user_id: props.profile.user_id,
    about: props.profile.about,
    photo: props.profile.photo,
    currently_employed: props.profile.currently_employed,
    current_job_title: props.profile.current_job_title,
    seeking_role: props.profile.seeking_role,
    job_field: props.profile.job_field,
    website: props.profile.website,
    linkedin: props.profile.linkedin,
    skills: props.profile.skills,
    experience_years: props.profile.experience_years,
    desired_salary: props.profile.desired_salary,
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
    await updateJobSeekerProfile(props.profile.id, formValues);
    navigate(`/network/jobseekers/${props.profile.user_id}`);
  };

  const DeleteProfile = async () => {
    try {
      await DeleteJobSeekerProfile(props.profile.user_id);
      navigate(`/network/jobseekers`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="about">About me:</label>
        <input
          onChange={handleChange}
          name="about"
          type="text"
          value={formValues.about}C
          required
        />
        <label htmlFor="photo">Photo</label>
        <input
          onChange={handleChange}
          name="photo"
          type="text"
          value={formValues.photo}
        />
        <label htmlFor="currently_employed">Currently Employed?</label>
        <input
          name="currently_employed"
          type="checkbox"
          checked={formValues.currently_employed}
          onChange={handleChange}
        />
        <label htmlFor="website">Website</label>
        <input
          onChange={handleChange}
          name="website"
          type="text"
          value={formValues.website}
        />
        <label htmlFor="linkedin">LinkedIn</label>
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
        <label htmlFor="current_job_title">Current Job Title</label>
        <input
          onChange={handleChange}
          name="current_job_title"
          type="text"
          value={formValues.current_job_title}
          required
        />
        <label htmlFor="seeking_role">Role you're applying as:</label>
        <input
          onChange={handleChange}
          name="seeking_role"
          type="text"
          value={formValues.seeking_role}
          required
        />
        <label htmlFor="skills">What are some of your skills?</label>
        <input
          onChange={handleChange}
          name="skills"
          type="text"
          value={formValues.skills}
          required
        />
        <label htmlFor="experience_years">
          How many years of experience do you have?
        </label>
        <input
          onChange={handleChange}
          name="experience_years"
          type="text"
          value={formValues.experience_years}
          required
        />
        <label htmlFor="desired_salary">
          What salary are you looking for?
        </label>
        <input
          onChange={handleChange}
          name="desired_salary"
          type="text"
          value={formValues.desired_salary}
          required
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={DeleteProfile}>Delete Profile</button>
    </div>
  );
          
}