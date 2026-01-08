import React from 'react'

const ProductList = ({children}) => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-around",
        gap:"50px",
        flexWrap: "wrap"
    }}>
        {children}
    </div>
  )
}

export default ProductList