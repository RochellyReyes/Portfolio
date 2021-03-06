import React from "react";
import MyForm from "../Components/ContactAPI/form";
import "../styling/Contact/contact.css";
import Footer from "../Components/Footer";

const Contact = () => {
    return(
        <div>
            <div className="contactText">
                <h1>Get in Touch</h1>
                <p>Feel free to contact me regarding any questions. I will try to respond at my earliest convenience. </p>
            </div>

            <MyForm/>

            <img 
                src="/images/contact/thanks.jpg" 
                alt="thank you"
                className="thankYou"
            />
            <Footer/>
        </div>
    )
}

export default Contact;
