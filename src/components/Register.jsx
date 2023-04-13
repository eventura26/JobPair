import { useState } from "react"
import { RegisterUser, SignInUser } from "../services/Auth"
import { useNavigate, Link } from "react-router-dom"

export default function Register(props){
    let navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        first_name: "",
        last_name: "",
        location:"",
        email: "",
        password: "",
        confirm_password: ""
    })

    const handleChange = (e) => {
        e.preventDefault()
        setFormValues({...formValues, [e.target.name]: e.target.value})
        console.log(formValues)
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      await RegisterUser({
        first_name: formValues.first_name,
        last_name: formValues.last_name,
        location: formValues.location,
        email: formValues.email,
        password: formValues.password,
        confirm_password: formValues.confirm_password,
      });
    
      // Sign in the user after successful registration
      const payload = await SignInUser({
        email: formValues.email,
        password: formValues.password,
      });
      props.setUser(payload);
      props.toggleAuthenticated(true);
    
      setFormValues({
        first_name: "",
        last_name: "",
        location:"",
        email: "",
        password: "",
        confirm_password: ""
      });
      navigate("/select-type");   
    };
    

    return(
        <div>
            <form className="register" onSubmit={handleSubmit}>
              <label htmlFor="firstName">first name</label>
              <input
              onChange={handleChange}
              name="first_name"
              type="text"
              value={formValues.first_name}
              required
              /> 
              <label htmlFor="lastName">last name</label>
              <input
              onChange={handleChange}
              name="last_name"
              type="text"
              value={formValues.last_name}
              required
              />
              <input
              onChange={handleChange}
              name="location"
              type="location"
              value={formValues.location}
              required
              />              
              <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
              />          
              <label htmlFor="password">password</label>
              <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
              /> 
              <label htmlFor="confirmPassword">confirm password</label>
              <input
              onChange={handleChange}
              type="password"
              name="confirm_password"
              value={formValues.confirm_password}
              required
              />
            <button
              disabled={
                !formValues.email ||
                !formValues.first_name ||
                !formValues.last_name ||
                (!formValues.password && formValues.confirm_password === formValues.password)
                
              }
            >
             Register
            </button>
        </form>
        <div>
          <p>Already have an account?</p>{" "}
          <Link to="/login">
            <button className="loginreg">Login</button>
          </Link>
        </div>
        </div>
    )
}