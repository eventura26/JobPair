import React, { useState } from "react";
import ListJobSeekers from "./ListJobSeekers";
import ListRecruiters from "./ListRecruiters";

const Network = () => {
  const [showJobSeekers, setShowJobSeekers] = useState(false);
  const [showRecruiters, setShowRecruiters] = useState(false);

  const handleJobSeekersClick = () => {
    setShowJobSeekers(true);
    setShowRecruiters(false);
  };

  const handleRecruitersClick = () => {
    setShowJobSeekers(false);
    setShowRecruiters(true);
  };

  return (
    <div>
      <button onClick={handleJobSeekersClick}>View Job Seekers</button>
      <button onClick={handleRecruitersClick}>View Recruiters</button>
      {showJobSeekers && <ListJobSeekers />}
      {showRecruiters && <ListRecruiters />}
    </div>
  );
};

export default Network;
