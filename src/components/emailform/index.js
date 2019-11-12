import React from "react";
import "./style.css";

function EmailForm() {
    return (
        <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/jj.mateer@live.com" method="post">
            <h1 className="mainH">Contact</h1>
            <label className="contactLabels" for="full-name">Full Name</label>
            <input type="text" name="name" id="full-name" placeholder="First and Last" required></input>
            <label className="contactLabels" for="email-address">Email Address</label>
            <input type="email" name="_replyto" id="email-address" placeholder="example@email.com" required></input>
            <label className="contactLabels" for="message">Message</label>
            <textarea rows="5" name="message" id="message" placeholder="Your message here..." required></textarea>
            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
            <input type="submit" id="submitBtn" value="Submit"></input>
        </form>

    )
}

export default EmailForm;