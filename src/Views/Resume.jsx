import React from "react";
import Footer from "../Components/Footer";
import "../styling/resume.css";

const Resume = () => {


    return(
        <div>
            <a href="https://drive.google.com/file/d/11ukWNnIrk44y0s0dMshwJTLtnvEsMPGh/view?usp=sharing">
                <img className="resumeImg" src="/images/resume/Portfolio-Resume.jpg" alt="Rochelly's Resume"/>
            </a>
            <p className="resumeText"> Click on the resume to be taken to a PDF downloadable version</p>
            <Footer/>
        </div>
    )
};

export default Resume;