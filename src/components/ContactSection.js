import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const ContactSection = ({ contactRef, contactInView }) => (
  <motion.div
    ref={contactRef}
    initial={{ y: 50, opacity: 0 }}
    animate={contactInView ? { y: 0, opacity: 1 } : {}}
    transition={{ type: "spring", stiffness: 50 }}
    className="contact-section"
  >
    <h2>Connect With Me</h2>
    <ContactForm />
  </motion.div>
);

export default ContactSection;
