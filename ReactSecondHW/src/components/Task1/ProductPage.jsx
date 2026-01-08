import React from 'react'
import ProductHeader from './ProductHeader'
import ProductFooter from './ProductFooter'
import ProductDetails from './ProductDetails'

import "./AllProductStyle.css"
const ProductPage = () => {
  return (
    <div>
        <ProductHeader/>
        <ProductDetails/>
        <ProductFooter/>
    </div>
  )
}

export default ProductPage