import React from "react";
import ContactForm from "../ContactForm";
import AboutMe from "../AboutMe";

function Contact() {
  return (
    <>
      <div className="contact-main">
        <AboutMe />
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
