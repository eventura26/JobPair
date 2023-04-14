import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetJobSeekerProfile } from "../services/Profiles";

export default function ProfileRecruiters(props) {
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
            Name: {profile.User.first_name} {profile.User.last_name}
          </h3>
          <p>Company: {profile.company}</p>
          <p>Location: {profile.User.location}</p>
          <p>Company Bio: {profile.about}</p>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}
