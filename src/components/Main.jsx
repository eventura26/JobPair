import { Route, Routes } from "react-router-dom";
import Login from "./FormLogin";
import Home from "./Home";
import About from "./About";
import UserTypeSelection from "./UserTypeSelection";
import Register from "./FormRegister";
import FormRecruiter from "./FormRecruiter";
import FormJobSeeker from "./FormJobSeeker";
import EditProfile from "./EditProfile";
import Network from "./Network";
import ProfileJobSeekers from "./ProfileJobSeekers";
import ProfileRecruiters from "./ProfileRecruiters";
export default function Main(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={props.setUser} toggleAuthenticated={props.toggleAuthenticated} /> } />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register setUser={props.setUser} toggleAuthenticated={props.toggleAuthenticated}/>}/>
        <Route path="/select-type" element={<UserTypeSelection user={props.user} authenticated={props.authenticated}/>}/>
        <Route path="/register/:id/r-form" element={<FormRecruiter setUser={props.setUser} toggleAuthenticated={props.toggleAuthenticated}/>}/>
        <Route path="/register/:id/s-form" element={<FormJobSeeker user={props.user} />}/>
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/network" element={<Network />} />
        <Route path="/network/recruiters/:id" element={<ProfileRecruiters />} />
        <Route path="/network/jobseekers/:id" element={<ProfileJobSeekers />} />
      </Routes>
    </div>
  );
}
