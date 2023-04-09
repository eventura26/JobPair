import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

export default function Login(){
    let navigate = useNavigate()
    const [formValues, setFormValues] = useState({username: "", password: ""})

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormValues({ username: "", password: "" });
        navigate("/home");
        console.log("logged in!");
      };
      
    return(
        <div>
            <form className="login-form">
                <input type="text" />
                <input type="text"/>
                <input type ="submit" />
            </form>
        </div>
    )
}