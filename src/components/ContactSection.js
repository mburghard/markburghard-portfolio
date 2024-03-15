import React from "react";
import "../styles/ContactSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <a href="mailto:markromanburghard@gmail.com" className="contact-link">
        <FontAwesomeIcon icon={faEnvelope} /> Email Me
      </a>
      <a href="tel:+7084397005" className="contact-link">
        <FontAwesomeIcon icon={faPhone} /> Call Me
      </a>
      <a
        href="https://github.com/mburghard/markburghard-portfolio"
        className="contact-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} /> My GitHub
      </a>
    </div>
  );
};

export default ContactSection;
