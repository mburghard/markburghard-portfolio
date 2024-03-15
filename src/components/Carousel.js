import React from "react";
import cloudIcon from "../assets/cloud-data.png";
import frontendIcon from "../assets/front-development.png";
import backendIcon from "../assets/back-end.png";
import ciIcon from "../assets/continuous.png";
import requirementsIcon from "../assets/requirement.png";

const SkillsCarousel = () => {
  return (
    <div id="skillsCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <h2 style={{ textAlign: "center" }}>Development Skills</h2>
        <div className="carousel-item active">
          <img
            src={cloudIcon}
            className="d-block mx-auto carousel-icon"
            alt="Cloud Architecture"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Cloud Architecture</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={frontendIcon}
            className="d-block mx-auto carousel-icon"
            alt="Front-end Development"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Front-end Development</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={backendIcon}
            className="d-block mx-auto carousel-icon"
            alt="Back-end Development"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Back-end Development</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={ciIcon}
            className="d-block mx-auto carousel-icon"
            alt="Continuous Integration/Deployment"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Continuous Integration/Deployment</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={requirementsIcon}
            className="d-block mx-auto carousel-icon"
            alt="Requirements Development"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Requirements Development</h5>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#skillsCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#skillsCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default SkillsCarousel;
