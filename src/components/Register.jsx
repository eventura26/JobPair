import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
export default function Register(){
    let navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        username:"",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        confirm_password: ""
    })

    const handleChange = (e) => {
        e.preventDefault()
        setFormValues({...formValues, [e.target.name]: e.target.value})
        console.log(formValues)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/api/register/', formValues)
            console.log(response)
            navigate('/login')
        } catch (error){
            console.error(error)
        }

    }

    return(
        <div>
            <form className="register" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
               <input onChange={handleChange} name="username" type="text" value={formValues.username} required/>
            <label htmlFor="email">email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
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
              !formValues.username ||
              (!formValues.password &&
                formValues.confirm_password === formValues.password)
            }
          >
            Register
          </button>
        </form>
        </div>
    )
}