import React from 'react'
import "./ProductCard.scss"

const ProductCard = ({product}) => {
    const {title, price,category,description} = product;
   return (
    <div className="product-card">
      <div className="category">{category}</div>

      <h3 className="title">{title}</h3>

      <p className="description">
        {description}
      </p>

      <div className="footer">
        <span className="price">${price}</span>
        <button className="btn">Buy</button>
      </div>
    </div>
  )
}

export default ProductCard