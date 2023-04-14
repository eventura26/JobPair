import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobSeekerProfile, setJobSeekerProfile] = useState(null);
  const [recruiterProfile, setRecruiterProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/profile');
        const { jobSeekerProfile, recruiterProfile } = response.data;
        setJobSeekerProfile(jobSeekerProfile);
        setRecruiterProfile(recruiterProfile);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!jobSeekerProfile && !recruiterProfile) {
    return <div>You do not have a profile yet</div>;
  }

  const profile = jobSeekerProfile || recruiterProfile;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/profile/${profile.id}/update`, {
        ...profile,
        // Update fields here
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (jobSeekerProfile) {
    return (
      <form onSubmit={handleSubmit}>
        {/* Render job seeker form here */}
      </form>
    );
  }

  if (recruiterProfile) {
    return (
      <form onSubmit={handleSubmit}>
        {/* Render recruiter form here */}
      </form>
    );
  }

  return null;
};

export default EditProfile;