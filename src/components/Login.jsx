import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

export default function Login(){
    let navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        username: "",
        password: ""})
    
    const handleChange = (e) => {
        e.preventDefault()
        setFormValues({...formValues, [e.target.name]: e.target.value})
        console.log(formValues)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:8000/api/login/', formValues)
            console.log(response);
            navigate('/')
        } catch (error){
            console.log(error)
        }

    }

    return(
        <div>
            <form className="login" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input onChange={handleChange} name="username" type="text" value={formValues.username} />
                <label htmlFor="password">password</label>
                <input onChange={handleChange} name="password" type="password" value={formValues.password}/>
                <input type ="submit" value="log in!" />
            </form>
        </div>
    )
}