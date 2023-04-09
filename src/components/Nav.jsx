import { Link } from "react-router-dom"
export default function Nav(){
    return(
        <div>
            <h1>JobPear</h1>
            <Link to="/register"><button>Register</button></Link>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/about"><button>About</button></Link>
        </div>    
    )
}