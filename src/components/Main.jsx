import { Route, Routes } from 'react-router-dom'
import Login from './Login';
import Home from './Home'
import About from './About'
import UserTypeSelection from './UserTypeSelection';
import Register from './Register';
import RegisterRecruiter from './ProfileRecruiter';
import RegisterJobSeeker from './ProfileJobSeeker';

export default function Main(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={props.setUser}
            toggleAuthenticated={props.toggleAuthenticated}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register setUser={props.setUser}
            toggleAuthenticated={props.toggleAuthenticated}/>} />
        <Route path="/select-type" element={<UserTypeSelection user={props.user} authenticated={props.authenticated}/>} />
        <Route path="/register/:id/r-form" element={<RegisterRecruiter setUser={props.setUser}
            toggleAuthenticated={props.toggleAuthenticated}/>} />
        <Route path="/register/:id/s-form" element={<RegisterJobSeeker user={props.user} />} />
      </Routes>
    </div>
  )
}
