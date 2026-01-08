import { useState } from 'react'
import ProductForm from './components/ProductForm'
import ProductFilter from './components/ProductFilter';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import {initialProducts as initialProducts} from "./mocks/products"

function App() {
  const [isProductForm, setIsProductForm] = useState(false);
  const [filtredValue,setFiltredValue ] = useState("");
  const [products,setProducts] = useState(initialProducts);
  

  const onAddProduct = (product) => 
  {
    setProducts(prevProduct => ([...prevProduct,product]));
    setIsProductForm(false);
  }

    const filtredProducts = filtredValue
    ? products.filter(p => p.category === filtredValue)
    : products;

  return (
    <>
    <ProductFilter filtredValue={filtredValue} setFiltredValue = {setFiltredValue} setIsProductForm = {setIsProductForm}/>
      {isProductForm && (
        <ProductForm
          onClose={() => setIsProductForm(false)}
          onAddProduct={onAddProduct}
        />
      )}
      <ProductList>
          {filtredProducts.map((p) => 
          <ProductCard key={p.id} product={p} />
          )}
      </ProductList>
    </>
  )
}

export default App
