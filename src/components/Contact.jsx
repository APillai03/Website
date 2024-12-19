import React from "react";
import "./contact.css";
function Contact() {

    return (
        <div className="Contact">
            <div className="contact-card">
                <div className="title">Contact Me</div>
                <input placeholder="Email" type="email"></input>
                <input placeholder="Name"></input>
                <textarea rows='5' cols='30' placeholder="Message" id="message"></textarea>
                <button>GO</button>
            </div>
            <div className="checkmark">
                <input type="checkbox" id="check"></input>
                <label htmlFor="check">
                    <div className="check-icon">
        
                    </div>
                </label>
            </div>
            
        </div>
    )

};
export default Contact;