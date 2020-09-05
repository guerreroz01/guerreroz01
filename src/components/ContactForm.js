import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="contact-main__form">
      <h2>CONTACT ME</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your name" name="name" />
        <input type="text" placeholder="Your phone" name="phone" />
        <input type="email" placeholder="Your email" name="email" />
        <input type="text" placeholder="Mensage" name="message" />
        <Button title={"SEND MESSAGE"} icon={<FaArrowRight />} />
      </form>
    </section>
  );
}

export default ContactForm;
