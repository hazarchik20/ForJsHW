import React from 'react'
import ProductFeature from './ProductFeature'
import { features } from "../../mocks/data-arrays"
const ProductFeatures = () => {
  return (
    <div>
        {features.map(({ id, title, description }) => (
            <ProductFeature key={id} title={title} description={description} />
        ))}
    </div>
  )
}

export default ProductFeatures