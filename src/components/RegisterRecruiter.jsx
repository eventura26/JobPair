import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios"

export default function RegisterRecruiter(){
    let navigate = useNavigate()
    const location = useLocation();
    const [user, setUser] = useState(null)
    const [formValues, setFormValues] = useState({
        username:"",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        confirm_password: "",
        location: "",
        bio: "",
        photo: "",
        company: "",
        website: "",
        linkedin: "",
        job_field: "",
        desired_role: "",
        desired_skills: "",
        desired_experience_years: "",
        salary_offered: "",
        benefits_offered: "",
    });

    const JOB_FIELDS = [
        ['tech', 'Technology'],
        ['health', 'Healthcare'],
        ['finance', 'Finance'],
        ['education', 'Education'],
        ['marketing', 'Marketing'],
        ['sales', 'Sales'],
        ['hr', 'Human Resources'],
        ['design', 'Design'],
        ['construction', 'Construction'],
        ['hospitality', 'Hospitality'],
        ['logistics', 'Logistics'],
        ['legal', 'Legal'],
        ['nonprofit', 'Non-profit'],
        ['government', 'Government'],
        ['science', 'Science'],
        ['research', 'Research'],
        ['media', 'Media'],
        ['entertainment', 'Entertainment'],
        ['sports', 'Sports'],
        ['arts', 'Arts'],
        ['agriculture', 'Agriculture'],
        ['energy', 'Energy'],
        ['environmental', 'Environmental']

    ]

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const token = localStorage.getItem("authToken");
          const response = await axios.post(
            "http://localhost:8000/api/recruiters/",
            formValues,
            {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          );
          // ...
        } catch (error) {
          // ...
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
                <label htmlFor="company">current company</label>
                <input onChange={handleChange} name="company" type="text" value={formValues.company} required/>
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
                <label htmlFor="desired_role">looking someone who is a:</label>
                <input onChange={handleChange} name="desired_role" type="text" value={formValues.desired_role} required/>
                <label htmlFor="desired_skills">what skills?</label>
                <input onChange={handleChange} name="desired_skills" type="text" value={formValues.desired_skills} required/>
                <label htmlFor="desired_experience_years">how many years of experience are you looking for</label>
                <input onChange={handleChange} name="desired_experience_years" type="text" value={formValues.desired_experience_years} required/>
                <label htmlFor="salary_offered">whats the job pay?</label>
                <input onChange={handleChange} name="salary_offered" type="text" value={formValues.salary_offered} required/>
                <label htmlFor="benefits_offered">what benefits does the position offer</label>
                <input onChange={handleChange} name="benefits_offered" type="text" value={formValues.benefits_offered} required/>
                <input type="submit" value="create profile" />
            </form>
            
        </div>

    )
}