import { Route, Routes } from 'react-router-dom'
import Login from './Login';
import Home from './Home'
import About from './About'
import Nav from './Nav'
import UserTypeSelection from './UserTypeSelection';
import Register from './Register';
import RegisterRecruiter from './RegisterRecruiter';
import RegisterJobSeeker from './RegisterJobSeeker';

export default function Main(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login   setUser={props.setUser}
  toggleAuthenticated={props.toggleAuthenticated}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select-type" element={<UserTypeSelection />} />
        <Route path="/register/r-form" element={<RegisterRecruiter />} />
        <Route path="/register/s-form" element={<RegisterJobSeeker />} />
      </Routes>
    </div>
  )
}
