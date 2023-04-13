import { useState } from "react"
import { SignInUser } from "../services/Auth";
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

export default function Login(props){

    let navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""})
    
    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        console.log(formValues)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = await SignInUser(formValues);
        setFormValues({ username: "", password: "" });
        props.setUser(payload);
        props.toggleAuthenticated(true);
        navigate("/");
        console.log("logged in!");
    };

    return(
        <div>
            <form className="login" onSubmit={handleSubmit}>
                <label htmlFor="username">email</label>
                <input onChange={handleChange} name="email" type="text" value={formValues.email} />
                <label htmlFor="password">password</label>
                <input onChange={handleChange} name="password" type="password" value={formValues.password}/>
                <input type ="submit" value="log in!" />
            </form>
        </div>
    )
}