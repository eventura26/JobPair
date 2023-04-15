import Client from "./api";

export const CreateJobSeekerProfile = async (formValues) => {
  try {
    const res = await Client.post("/jobseeker/create", formValues);
    return res.data.user;
  } catch (error) {
    throw error;
  }
};

export const updateJobSeekerProfile = async (id, formValues) => {
  try {
    const res = await Client.put(`/jobseeker/profiles/${id}`, formValues);
    return res.data.profile;
  } catch (error) {
    throw error;
  }
};

export const CreateRecruiterProfile = async (formValues) => {
  try {
    const res = await Client.post("/recruiter/create", formValues);
    return res.data.user;
  } catch (error) {
    throw error;
  }
};

export const updateRecruiterProfile = async (id, formValues) => {
  try {
    const res = await Client.put(`/recruiter/profiles/${id}`, formValues);
    return res.data.profile;
  } catch (error) {
    throw error;
  }
};


export const GetAllRecruiterProfiles = async () => {
  try {
    const res = await Client.get("/recruiter")
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAllJobSeekerProfiles = async () => {
  try {
    const res = await Client.get("/jobseeker")
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetRecruiterProfile = async (user_id) => {
  try {
    const res = await Client.get(`/recruiter/${user_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetJobSeekerProfile = async (user_id) => {
  try {
    const res = await Client.get(`/jobseeker/${user_id}`)
    return res.data
  }catch(error){
    throw error
  }
}
