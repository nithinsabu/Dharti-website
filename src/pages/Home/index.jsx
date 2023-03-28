import React from "react";
import Navba1 from "../../components/Navbar";
import App1 from "../../components/Carousel";
import Footer from "../../components/Footer";
import "./home.css";
const Home = () => {
    return (
        <>
        <Navba1 />
        <App1 />
        
        <div className="head">
                About Dharti
        </div>
        <div className="content">
        We have been receiving a lot of requests for accepting online submissions as well for the event. Therefore, we have decided to keep the event in hybrid mode! 

Participants will still get the chance to present their work offline, but posters and presentation have been made optional. Instead, you are expected to follow the same submission criteria, but include a report instead of the presentation. However, if you are submitting offline, you can include the presentation as well and if you want to, the poster too! 

Do join our support WhatsApp group as well through this link. Feel free to ask any doubts through the support group and our organizers would be happy to help you out. 
        </div>
        <Footer />
        </>
    );
}

export default Home