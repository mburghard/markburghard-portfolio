import React, { useState, useEffect } from "react";
import "../styles/AutoplayImg.css";
import "../styles/FeaturePopouts.css";
import siteData from "../assets/site-data";

const AutoplayImage = ({
  images,
  currentImageIndex,
  setCurrentImageIndex,
  interval,
  onProgressChange,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fadeDuration = 600;
  const circleRadius = 33;
  const circleCircumference = 2 * Math.PI * circleRadius;

  const imageInfo = siteData.imageInfo;

  const [shouldSpawn, setShouldSpawn] = useState(false);

  const renderFeaturePopouts = () => {
    const currentImageKey = `image${currentImageIndex + 1}`;
    const currentImageCoordinates = imageInfo[currentImageKey];

    return (
      <div className="feature-popouts-container">
        {currentImageCoordinates &&
          currentImageCoordinates.map((info, index) => (
            <React.Fragment key={index}>
              <div
                className={`popout-dot ${shouldSpawn ? "spawn-in" : ""}`}
                style={{ left: `${info.x}%`, top: `${info.y}%` }}
              ></div>
              <div
                className="line-container"
                style={{ left: `${info.x}%`, top: `${info.y}%` }}
              >
                <div
                  className={`diagonal-line ${
                    shouldSpawn ? "grow-diagonal" : ""
                  }`}
                ></div>
                <div
                  className={`horizontal-line ${
                    shouldSpawn ? "grow-horizontal" : ""
                  }`}
                ></div>
              </div>

              <div
                className={`popout-detail ${
                  shouldSpawn ? "fade-in-detail" : ""
                }`}
                style={{ left: `${info.x}%`, top: `${info.y + -2}%` }}
              >
                <div>
                  <h3>{info.feature}</h3>
                  <p>{info.detail}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
      </div>
    );
  };

  useEffect(() => {
    if (isFading) {
      setShouldSpawn(false);
    } else {
      const spawnTimer = setTimeout(() => {
        setShouldSpawn(true);
      }, 100);

      return () => clearTimeout(spawnTimer);
    }
  }, [isFading, currentImageIndex]);

  useEffect(() => {
    setShouldSpawn(false);
  }, [currentImageIndex]);

  useEffect(() => {
    let progressTimer;
    let timer;

    const changeImage = () => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, fadeDuration);
    };

    if (isPlaying) {
      setProgress(0);
      progressTimer = setInterval(() => {
        setProgress((oldProgress) => {
          const newProgress = oldProgress >= 100 ? 0 : oldProgress + 1;
          onProgressChange && onProgressChange(newProgress);
          return newProgress;
        });
      }, interval / 100);

      timer = setTimeout(changeImage, interval - fadeDuration);
    } else {
      setProgress(0);
    }

    return () => {
      clearInterval(progressTimer);
      clearTimeout(timer);
    };
  }, [
    images.length,
    currentImageIndex,
    isPlaying,
    interval,
    fadeDuration,
    setCurrentImageIndex,
  ]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="autoplay-image-container">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Product ${index + 1}`}
            className="product-image"
            style={{
              transition: `opacity ${fadeDuration}ms ease`,
              opacity: index === currentImageIndex ? (isFading ? 0 : 1) : 0,
            }}
          />
        ))}
        {renderFeaturePopouts()}
      </div>
      <div className="play-pause-container">
        <svg className="progress-ring">
          <circle className="empty-circle" r={circleRadius} />
          <circle
            className="progress-ring_circle"
            fill="transparent"
            r={circleRadius}
            style={{
              strokeDasharray: `${circleCircumference} ${circleCircumference}`,
              strokeDashoffset:
                circleCircumference - (progress / 100) * circleCircumference,
            }}
          />
        </svg>
        <button className="play-pause-button" onClick={togglePlayPause}>
          <svg
            viewBox="0 0 24 24"
            className="icon-play"
            style={{ display: isPlaying ? "none" : "block" }}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            className="icon-pause"
            style={{ display: isPlaying ? "block" : "none" }}
          >
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default AutoplayImage;
