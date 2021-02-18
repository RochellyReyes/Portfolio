import React from 'react';
import * as AiIcons from 'react-icons/ai';
import '../styling/footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footerIcons">
                <span>
                    <AiIcons.AiOutlineLinkedin onClick={()=>{window.location="https://www.linkedin.com/in/rochellyr/"}}/>
                </span>
                <span>
                    <AiIcons.AiOutlineGithub onClick={()=>{window.location="https://github.com/RochellyReyes"}}/>
                </span>
                <span>
                    <AiIcons.AiFillTwitterSquare onClick={()=>{window.location="https://twitter.com/?lang=en"}}/> 
                </span>
            </div>

            <div className="update">
                <p>Last updated: 2021</p>
            </div>
        </div>
    )
};

export default Footer;