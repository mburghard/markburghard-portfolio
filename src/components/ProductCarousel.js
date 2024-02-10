import React, { useState } from "react";
import "../styles/ProductCarousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slides">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`carousel-image ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
      </div>

      <Nav
        currentIndex={currentIndex}
        total={totalImages}
        goToNext={goToNext}
        goToPrev={goToPrev}
      />
    </div>
  );
};

const Nav = ({ currentIndex, total, goToNext, goToPrev }) => {
  const progress = ((currentIndex + 1) / total) * 100;

  return (
    <div className="carousel-nav">
      <span className="carousel-counter">
        {currentIndex + 1}/{total}
      </span>
      <div className="carousel-progress-bar">
        <div
          className="carousel-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button className="carousel-arrow" onClick={goToPrev}>
        ←
      </button>
      <button className="carousel-arrow" onClick={goToNext}>
        →
      </button>
    </div>
  );
};

export default Carousel;
