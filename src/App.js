import './styles/style.css'
import Main from './components/Main';
import Nav from './components/Nav'
import Login from './components/Login';
import { useState, useEffect } from "react";
import { CheckSession } from "./services/Auth";


function App() {

  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () =>{
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  } 

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
        <header className="App-header">
          <Nav 
            authenticated={authenticated}
            user={user}
            handleLogOut={handleLogOut} />
        </header>
        <main>
          <Main   
            setUser={setUser} 
            toggleAuthenticated={toggleAuthenticated} />
        </main>
    </div>
  );
}

export default App;
