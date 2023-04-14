import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetAllRecruiterProfiles } from "../services/Profiles";

export default function ListRecruiters() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await GetAllRecruiterProfiles();
      setProfiles(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Recruiter Profiles:</h1>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <Link to={`/network/recruiters/${profile.User.id}`}>
            <h3>Company: {profile.company}</h3>
            <h3>Name: {profile.User.first_name} {profile.User.last_name}</h3>
            <p>Bio: {profile.company_bio}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
