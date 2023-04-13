import { useNavigate } from "react-router-dom";

export default function UserTypeSelection(props){
    const navigate = useNavigate();
console.log(props.user)
    const handleRoleSelection = (role) => {
        navigate(`/register/${props.user.id}/${role}-form`);
    };

    const authenticatedOptions = (
        <div>
            <h3>Which are you?</h3>
            <button onClick={() => handleRoleSelection("r")}>Recruiter!</button>
            <button onClick={() => handleRoleSelection("s")}>Job Seeker!</button>
        </div>
    );
  
    const publicOptions = (
        <div>
            <h3>Please log in</h3>
        </div>
    );
    
    return(
        <div>
            {props.authenticated && props.user ? authenticatedOptions : publicOptions}
        </div>
    );
}
