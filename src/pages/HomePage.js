import React, { useRef } from "react";

import aboutMeText from "../assets/aboutMeText";
import { useInView } from "react-intersection-observer";

import "../styles/HomePage.css";
import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import SkillsCarousel from "../components/Carousel";
import HeaderSection from "../components/HeaderSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  useEffect(() => {
    var myCarousel = document.querySelector("#skillsCarousel");
    new window.bootstrap.Carousel(myCarousel, {
      interval: 2000,
      wrap: true,
    });
  }, []);

  const aboutSectionRef = useRef(null);

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <div className="container-master">
      <HeaderSection scrollToAbout={scrollToAbout} />
      <AboutSection
        aboutRef={aboutRef}
        aboutInView={aboutInView}
        aboutMeText={aboutMeText}
        aboutSectionRef={aboutSectionRef} // Pass this as a prop
      />
      <SkillsCarousel />
      <SkillsSection skillsRef={skillsRef} skillsInView={skillsInView} />
      <ContactSection contactRef={contactRef} contactInView={contactInView} />
    </div>
  );
};

export default HomePage;
