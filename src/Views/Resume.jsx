import React from "react";
import Footer from "../Components/Footer";
import "../styling/resume.css";


const Resume = () => {

    return(
        <div>
            <img className="resumeImg" src="/images/resume/Portfolio-Red.jpg" alt="Rochelly's Resume" 
            onClick={()=> window.open(`https://drive.google.com/file/d/1Odv5lSmPQmA41xBuxxs_FWUgJ1wjWBvC/view?usp=sharing`, `_blank`)}
            />
            
            <p className="resumeText"> Click on the resume to be taken to a PDF downloadable version</p>
            <Footer/>
        </div>
    )
};

export default Resume;