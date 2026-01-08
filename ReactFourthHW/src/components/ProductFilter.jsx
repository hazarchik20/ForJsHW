import React, { useState } from 'react'
import "./ProductFilter.scss"

const ProductFilter = ({ filtredValue, setFiltredValue, setIsProductForm }) => {
  return (
    <div className='product-filter'>
      <select
        value={filtredValue}
        name="category"
        id="category"
        onChange={(e) => setFiltredValue(e.target.value)}
      >
        <option value="">Select...</option>
        <option value="electronics">electronics</option>
        <option value="clothes">clothes</option>
        <option value="books">books</option>
      </select>

      <button className='openform-btn' onClick={() => setIsProductForm(true)}>
        open modal
      </button>
    </div>
  )
}
export default ProductFilter