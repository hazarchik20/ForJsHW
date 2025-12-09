import React from 'react'

const ProductFeature = ({ title, description }) => {
  return (
    <div className="product-feature">
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};
export default ProductFeature