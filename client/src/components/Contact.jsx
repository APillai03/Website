import React, {useState}from "react";
import "./contact.css";
function Contact() {

    

    const [emailData,setEmailData] = useState({
        subject: 'PORTFOLIO CONTACT REQUEST',
        text: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEmailData({...emailData, [name]: value});
    };
    const sendEmail = async () => {
        console.log("Button Clicked2");
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(emailData),
            });
            if(response.ok) {
                alert('SUCCESS');
            }
            else{
                alert('FAIL');
            }
        }catch (error) {
        console.error('ERROR-> ',error);
        alert('An Error occured.');

        }
    };
    return (
        <div className="Contact">
            <div className="contact-card">
                <div className="title">Contact Me</div>
                <input placeholder="Email" type="email"></input>
                <input placeholder="Name"></input>
                <textarea rows='5' cols='30' placeholder="Message" id="message" name="text" value={emailData.text} onChange={handleChange}></textarea>
                <button onClick={() => { console.log("Button Clicked"); sendEmail(); }}>Send</button>
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