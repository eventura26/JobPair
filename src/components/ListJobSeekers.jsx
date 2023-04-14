import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetAllJobSeekerProfiles } from "../services/Profiles";

export default function ListJobSeekers() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await GetAllJobSeekerProfiles();
      setProfiles(data);
      console.log(data)
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Job Seeker Profiles:</h1>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <Link to={`jobseekers/${profile.User.id}`}>
            <h3>Name: {profile.User.first_name} {profile.last_name}</h3>
            <img src={profile.photo} />
            <p>Location: {profile.User.location}</p>
            <p>Job Field: {profile.job_field}</p>
            <p>About: {profile.about}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
