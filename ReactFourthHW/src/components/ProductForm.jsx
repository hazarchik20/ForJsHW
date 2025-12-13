import React, { useState } from 'react';
import "./ProductForm.scss"

const ProductForm = ({onClose, onAddProduct }) => { 
   
    const [product, setProduct] = useState({
        title: '',
        price: '',
        category: '',
        description: '',
    })
    
    const { title, price, category, description } = product; 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!title || !price || !category || !description) {
            alert('Усі поля повинні бути заповнені!');
            return;
        }
        const priceValue = Number(price);
      
        if (title.length < 3 || title.length > 50) {
            alert('Назва (title) має бути 3-50 символів.');
            return;
        }
        if (priceValue <= 0 || isNaN(priceValue)) {
            alert('Ціна (price) має бути числом, більшим за 0.');
            return;
        }
        if (description.length < 10 || description.length > 300) {
            alert('Опис (description) має бути 10-300 символів.');
            return;
        }
      
        const newProduct = {
            id: crypto.randomUUID(),
            title,
            price: priceValue,
            category,
            description,
        };
        
        onAddProduct(newProduct); 

        setProduct({
            title: '',
            price: '',
            category: '',
            description: '',
        })
    }

    return (
        <div className="form-wrapper">
            <form className='form' onSubmit={handleSubmit}> 
                <button onClick={onClose} className='cancel-btn'>&times;</button> 
                <h2 className="title">Add Product</h2>
                <div className="input-wrapper">
                    <label className="label">Title</label> 
                    <input 
                        type="text" 
                        name='title' 
                        id='title' 
                        value={title} 
                        onChange={handleChange} 
                        minLength={3} 
                        maxLength={50} 
                    />
                </div>
                <div className="input-wrapper">
                    <label className="label">Price</label>
                    <input 
                        type="number" 
                        name='price' 
                        id='price' 
                        value={price} 
                        onChange={handleChange} 
                        min={1} 
                        step="1"
                    />
                </div>
                <div className="input-wrapper">
                    <label className="label">Category</label>
                    <select value={category} name="category" id="category" onChange={handleChange}>
                        <option value="" disabled>Select...</option>
                        <option value="electronics">electronics</option>
                        <option value="clothes">clothes</option>
                        <option value="books">books</option>
                    </select>
                </div>

                <div className="input-wrapper">
                    <label className="label">Description</label>
                    <input 
                        type="text" 
                        name='description' 
                        id='description' 
                        value={description} 
                        onChange={handleChange} 
                        minLength={10}
                        maxLength={300} 
                    />
                </div>
                <button type="submit" className="submit-btn">Додати товар</button> 
            </form>
        </div>
    )
}

export default ProductForm;