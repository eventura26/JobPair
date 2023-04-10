import { Link } from "react-router-dom"
export default function Nav(){
    return(
        <div className="nav-bar">
            <h1 className="title">JobPear</h1>
            <div className="nav-links">
                <Link to="/"><button>Home</button></Link>
                <Link to="/register"><button>Register</button></Link>
                <Link to="/login"><button>Login</button></Link>
                <Link to="/about"><button>About</button></Link>
            </div>
        </div>    
    )
}