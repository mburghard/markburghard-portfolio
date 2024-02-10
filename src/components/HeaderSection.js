import React from "react";
import { useNavigate } from "react-router-dom";
import videoBackground from "../assets/background-video-1.mp4";

const HeaderSection = ({ scrollToAbout }) => {
  const navigate = useNavigate();

  const navigateToProductShowcase = () => {
    navigate("/product-showcase");
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
      <button className="cta-button" onClick={scrollToAbout}>
        See what I can do for you
      </button>
      <button className="cta-button" onClick={navigateToProductShowcase}>
        YTC Product Showcase
      </button>
    </div>
  );
};

export default HeaderSection;
