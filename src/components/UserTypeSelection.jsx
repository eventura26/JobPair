import { useNavigate, useLocation } from "react-router-dom"

export default function UserTypeSelection(){
    const navigate = useNavigate()

    const handleRoleSelection = (role) => {
        navigate(`/register/${role}-form`,)
    }

    return(
        <div>
            <h3>Which are you?</h3>
            <button onClick={() => handleRoleSelection("r")}>Recruiter!</button>
            <button onClick={() => handleRoleSelection("s")}>Job Seeker!</button>
        </div>
    )
}