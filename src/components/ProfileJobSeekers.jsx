import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetJobSeekerProfile } from "../services/Profiles";

export default function ProfileJobSeekers(props) {
  const [profile, setProfile] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await GetJobSeekerProfile(id);
      setProfile(data.profile);
      console.log(data);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      {profile && profile.User ? (
        <>
          <h3>
            {profile.User.first_name} {profile.User.last_name}
          </h3>
          <img src={profile.User.photo}/>
          <p>LinkedIn: {profile.linkedin}</p>
          <p>Location: {profile.User.location}</p>
          <p>Looking for work as a: {profile.seeking_role}</p>
          <p>My Skill: {profile.skills}</p>
          <p>A little bit about me: {profile.about}</p>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}
