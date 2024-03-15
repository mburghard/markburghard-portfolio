import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const BackToHomeButton = () => {
  return (
    <Link to="/" className="back-to-home-btn">
      <FontAwesomeIcon icon={faHouse} /> Home
    </Link>
  );
};

export default BackToHomeButton;
