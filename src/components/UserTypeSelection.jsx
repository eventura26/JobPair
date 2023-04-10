import { useNavigate, useLocation } from "react-router-dom"

export default function UserTypeSelection(){
    const location = useLocation()
    const navigate = useNavigate()
    const userId = location.state.userId

    const handleRoleSelection = (role) => {
        navigate(`/${role}-form`, {state: { userId }})
    }

    return(
        <div>
            <h3>Which are you?</h3>
            <button onClick={() => handleRoleSelection("r")}>Recruiter!</button>
            <button onClick={() => handleRoleSelection("s")}>Job Seeker!</button>
        </div>
    )
}