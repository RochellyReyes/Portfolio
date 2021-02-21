import React from "react";
import MyForm from "../Components/ContactAPI/form";
import "../styling/contact.css";
import Footer from "../Components/Footer";

const Contact = () => {
    return(
        <div>
            <div className="contactText">
                <h1>Get in Touch</h1>
                <p>Feel free to contact me regarding any questions. I will try to respond at my earliest convenience. </p>
            </div>
            <MyForm/>

            <Footer/>
        </div>
    )
}

export default Contact;
