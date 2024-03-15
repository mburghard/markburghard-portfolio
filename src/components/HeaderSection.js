import React from "react";
import { useNavigate } from "react-router-dom";
import videoBackground from "../assets/background-video-1.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const HeaderSection = ({ scrollToAbout }) => {
  const navigate = useNavigate();

  const navigateToProductShowcase = () => {
    navigate("/product-showcase");
  };
  const navigateToGithub = () => {
    window.open(
      "https://github.com/mburghard/markburghard-portfolio",
      "_blank"
    );
  };

  return (
    <div className="full-page-header">
      <video playsInline autoPlay muted loop className="video-background">
        <source src={videoBackground} type="video/mp4" />
      </video>
      <h1 className="header-title">Efficiency + Innovation</h1>
      <p className="header-subtitle">
        Driving Progress with Precision and Creativity
      </p>
      <button className="cta-button" onClick={navigateToProductShowcase}>
        Front End Product Showcase Demo
      </button>
      <button className="cta-button" onClick={scrollToAbout}>
        See what I can do for you
      </button>
      <button className="cta-button" onClick={navigateToGithub}>
        <FontAwesomeIcon icon={faGithub} /> Github Portfolio
      </button>
    </div>
  );
};

export default HeaderSection;
