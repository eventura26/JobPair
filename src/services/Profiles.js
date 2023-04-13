import Client from "./api"

export const UpdateJobSeekerProfile = async () => {
    try{
        const res = await Client.post("/jobseeker/update")
        return res.data.user
    }catch (error){
    throw error
    }
}