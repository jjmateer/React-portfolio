import React from "react";
import "./style.css";

function EmailForm({ handleInputChange, handleFormSubmit }) {
    return (
        <form id="contactForm" method="POST" action="send">
            <h1 className="mainH">Contact</h1>
            <span className="contactlabels">Name</span>
            <input required className="formInputs" placeholder="Ex: John Johnson" id="name" />
            <span className="contactlabels">Email</span>
            <input required className="formInputs" placeholder="Ex: name@email.com" id="email" />
            <span className="contactlabels">Message</span>
            <textarea required className="formInputs" placeholder="Enter message here..." id="message"></textarea>
            <button id="submitBtn" type="submit">Send</button>
        </form>
    )
}

export default EmailForm;