import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../assets/profile_pic.jpg";

const AboutSection = ({
  aboutRef,
  aboutInView,
  aboutMeText,
  aboutSectionRef,
}) => (
  <div ref={aboutSectionRef}>
    <motion.div
      ref={aboutRef}
      initial={{ x: "-70vw", opacity: 0 }}
      animate={aboutInView ? { x: 0, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 50 }}
      className="text-center my-4"
    >
      <div className="about-me-section">
        <div className="about-me-content">
          <h2>About Me</h2>
          <p>{aboutMeText}</p>
        </div>
        <div className="about-me-photo">
          <img src={profilePhoto} alt="Profile" />
        </div>
      </div>
    </motion.div>
  </div>
);

export default AboutSection;
