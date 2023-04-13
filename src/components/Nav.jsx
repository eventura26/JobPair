import { Link } from "react-router-dom"
export default function Nav({ authenticated, user, handleLogOut }){
    let authenticatedOptions
    if (user) {
        console.log(user)
      authenticatedOptions = (
        <nav>
          <h3>Welcome {user.first_name}!</h3>
          <Link to="/"><button>Home</button></Link>
          <Link to="/"><button>Find A Match</button></Link>
          <Link to="/"><button>Messages</button></Link>
          <Link to="/"><button>Edit Profile</button></Link>
          <Link to="/about"><button>About</button></Link>
          <Link onClick={handleLogOut} to="/">
            <button>Sign Out</button>
          </Link>
        </nav>
      )
    }
  
    const publicOptions = (
      <nav> 
        <Link to="/"><button>Home</button></Link>
        <Link to="/register"><button>Register</button></Link>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/about"><button>About</button></Link>
      </nav>
    )
    return(
        <div className="nav-bar">
            <h1 className="title">JobPear</h1>
            <div className="nav-links">
            {authenticated && user ? authenticatedOptions : publicOptions}
            </div>
        </div>    
    )
}