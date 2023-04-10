import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

export default function Login(){
    let navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        username: "",
        password: ""})

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormValues({ username: "", password: "" });
        navigate("/home");
        console.log("logged in!");
      };
      
    return(
        <div>
            <form className="login">
                username: <input type="text" />
                password: <input type="text"/>
                <input type ="submit" value="log in!" />
            </form>
        </div>
    )
}