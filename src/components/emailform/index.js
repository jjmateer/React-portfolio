import React from "react";
import AbsoluteWrap from "../absolute-wrap";
import "./style.css";

function EmailForm() {
    return (
        <AbsoluteWrap>
        <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/jj.mateer@live.com" method="post">
            <h1 className="mainH"></h1>
            <label className="contactLabels" htmlFor="full-name">Full Name</label>
            <input type="text" name="name" id="full-name" placeholder="First and Last" required></input>
            <label className="contactLabels" htmlFor="email-address">Email Address</label>
            <input type="email" name="_replyto" id="email-address" placeholder="example@email.com" required></input>
            <label className="contactLabels" htmlFor="message">Message</label>
            <textarea rows="5" name="message" id="message" placeholder="Your message here..." required></textarea>
            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
            <input type="hidden" name="_next" value="https://react-slick.neostack.com/docs/example/custom-arrows/" />
            <input type="submit" id="submitBtn" value="Submit"></input>
        </form>
        </AbsoluteWrap>
    )
}

export default EmailForm;