import './styles/style.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'
import UserTypeSelection from './components/UserTypeSelection';
import RecruiterForm from './components/RecruiterForm';
import JobSeekerForm from './components/JobSeekerForm';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/select-type" element={<UserTypeSelection />} />
        <Route path="/r-form" element={<RecruiterForm />} />
        <Route path="/s-form" element={<JobSeekerForm />} />
      </Routes>
    </div>
  );
}

export default App;
