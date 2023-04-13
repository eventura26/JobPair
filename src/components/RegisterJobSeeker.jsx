import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterJobSeeker() {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
    location: "",
    bio: "",
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
    desired_benefits: "",
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

    try {
      const response = await axios.post("", formValues);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };


    return(
        <div>
            <form className="recruiter-profile" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input onChange={handleChange} name="username" type="text" value={formValues.username} required/>
                <label htmlFor="email">email</label>
                <input onChange={handleChange} name="email" type="email" placeholder="example@example.com" value={formValues.email} required />
                <label htmlFor="firstName">first name</label>
                <input onChange={handleChange} name="first_name" type="text" value={formValues.first_name} required /> 
                <label htmlFor="lastName">last name</label>
                <input onChange={handleChange} name="last_name" type="text" value={formValues.last_name} required />                        
                <label htmlFor="password">password</label>
                <input onChange={handleChange} type="password" name="password" value={formValues.password} required /> 
                <label htmlFor="confirmPassword">confirm password</label>
                <input onChange={handleChange} type="password" name="confirm_password" value={formValues.confirm_password} required />
                <label htmlFor="location">location</label>
                <input onChange={handleChange} name="location" type="text" value={formValues.location} required/>
                <label htmlFor="bio">about me</label>
                <input onChange={handleChange} name="bio" type="text-field" value={formValues.bio} required/>
                <label htmlFor="photo">photo</label>
                <input onChange={handleChange} name="photo" type="text" value={formValues.photo} />
                <label htmlFor="currently_employed">Currently Employed</label>
                <input name="currently_employed" type="checkbox" checked={formValues.currently_employed} onChange={(e) => setFormValues({ ...formValues, currently_employed: e.target.checked })} />
                <label htmlFor="website">website</label>
                <input onChange={handleChange} name="website" type="text" value={formValues.website} />
                <label htmlFor="linkedin">linkedin</label>
                <input onChange={handleChange} name="linkedin" type="text" value={formValues.linkedin} />
                <label htmlFor="job_field">Job Field</label>
                <select name="job_field" id="job_field" value={formValues.job_field} onChange={handleChange} required>
                <option value="">Select Job Field</option>
                {JOB_FIELDS.map(([key, label]) => (
                <option key={key} value={key}>
                {label}
                </option>
                ))}
                </select>
                <label htmlFor="current_job_title">Current Job Title</label>
                <input onChange={handleChange} name="current_job_title" type="text" value={formValues.current_job_title} required/>
                <label htmlFor="seeking_role">Looking for someone who is a:</label>
                <input onChange={handleChange} name="seeking_role" type="text" value={formValues.seeking_role} required/>
                <label htmlFor="skills">what skills?</label>
                <input onChange={handleChange} name="skills" type="text" value={formValues.skills} required/>
                <label htmlFor="experience_years">how many years of experience are you looking for</label>
                <input onChange={handleChange} name="experience_years" type="text" value={formValues.experience_years} required/>
                <label htmlFor="desired_salary">whats the job pay?</label>
                <input onChange={handleChange} name="desired_salary" type="text" value={formValues.desired_salary} required/>
                <label htmlFor="desired_benefits">what benefits does the position offer</label>
                <input onChange={handleChange} name="desired_benefits" type="text" value={formValues.desired_benefits} required/>
                <input type="submit" value="create account" />
            </form>
            
        </div>

    )
}