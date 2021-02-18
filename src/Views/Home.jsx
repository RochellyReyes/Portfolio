import React from "react";
import '../styling/home.css';
import Footer from '../Components/Footer';

const Home = () => {

    return(
        <div>
            <div className="hero">
                <img src="/images/home/hero-text.jpeg" alt="laptop slightly open"/>
            </div>

            <div className="about">
                <div className="about-image">
                    <img id="profileP" src="/images/home/rochelly_profile.jpeg" alt="Rochelly image"/>
                </div>
                <div className="about-text">
                    <h1>Welcome!</h1>
                    <p>Thank you for visiting my page. As mentioned, my name is Rochelly Reyes (pronounced Ro-shell-E).  
                    </p>
                    <br/>
                    <p>Recently pivoting my career in healthcare to tech where I will bring along my customer service skills, determination, diligence, and communication skills to name a few.</p>
                    <br/>
                    <p> My hope is to one day become a full-stack developer and in the meantime, I'll learn and practice as much as I can. 
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;