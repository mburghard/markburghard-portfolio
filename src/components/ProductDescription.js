import React from "react";
import "../styles/ProductDescription.css";

const ProductDescription = ({ productLogo, featureIcons }) => {
  return (
    <div className="product-description">
      <div className="product-header">
        <img src={productLogo} alt="Product Logo" className="product-logo" />
        <div className="feature-icons">
          {featureIcons.map((icon, index) => (
            <div key={index} className="feature-icon">
              <img src={icon.image} alt={icon.description} />
              <div className="icon-description">
                <span className="icon-desc-text">{icon.description}</span>
                <div className="icon-detail-text">{icon.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
