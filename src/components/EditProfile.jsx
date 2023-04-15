// EditProfile.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetUserProfileType } from "../services/Auth"


export default function EditProfile(props) {
  const [profileType, setProfileType] = useState(null);
  const [profile, setProfile] = useState(null);
  const { user_id } = useParams();
console.log(user_id)
  useEffect(() => {
    async function fetchProfileType() {
      try {
        const result = await GetUserProfileType(user_id);
        setProfileType(result.profileType);
        setProfile(result.profile);
        console.log(result)
      } catch (error) {
        console.error("Error fetching profile type:", error);
      }
    }

    fetchProfileType();
  }, [user_id]);

  // const renderProfileForm = () => {
  //   switch (profileType) {
  //     case "recruiter":
  //       return <RecruiterProfileForm profile={profile} />;
  //     case "jobseeker":
  //       return <JobSeekerProfileForm profile={profile} />;
  //     default:
  //       return <p>Loading...</p>;
  //   }
  // };

  return (
    <div>
      <h1>Edit Profile</h1>
      {/* {renderProfileForm()} */}
    </div>
  );
}
