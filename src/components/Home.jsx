import { useLocation } from "react-router-dom";
export default function Home(){

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    if (queryParams.get("profile_updated") === "true") {
        prompt('profile created!')
    }

    return(
        <div className="container">
            <div className="welcome">
                <h3>Having trouble finding the ideal match? Let's find you the perfect pairing. Whether you're a recruiter seeking a candidate or a job seeker eager for new opportunities, your match might be just a swipe away! 💜</h3>
            </div>
            <div className="home-imgs">
                <img src="https://images.pexels.com/photos/6347901/pexels-photo-6347901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>
        </div>
    )
}