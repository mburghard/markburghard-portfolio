import React from "react";
import { Link } from "react-router-dom"; // or import appropriate navigation function
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const BackToHomeButton = () => {
  return (
    <Link to="/" className="back-to-home-btn">
      <FontAwesomeIcon icon={faHouse} /> Home
    </Link> // Use appropriate navigation method
  );
};

export default BackToHomeButton;
