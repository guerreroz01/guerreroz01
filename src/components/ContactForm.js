import React from "react";
import { FaArrowRight } from "react-icons/fa";
function ContactForm() {
  return (
    <section className="contact-main__form">
      <h2>CONTACTAME</h2>
      <form className="form">
        <input type="text" placeholder="Tu nombre" name="name" />
        <input type="text" placeholder="Tu teléfono" name="phone" />
        <input type="email" placeholder="Tu email" name="email" />
        <input type="text" placeholder="Mensage" name="message" />
        <button type="submit">
          SEND MESSAGE
          <span style={{ marginLeft: "12px" }}>
            <FaArrowRight />
          </span>
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
