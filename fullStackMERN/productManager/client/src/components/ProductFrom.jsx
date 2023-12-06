import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = (props) => {
    const {product, onSubmitProps, errors, setProduct} = props

    const changeHandler = e => { // onChange event handlers
    setProduct({
        ...product,
        [e.target.name] : e.target.value
        });
    }

  return (
    <>
        <form onSubmit={(e) => {
            e.preventDefault(); 
            onSubmitProps(product)
            }}> 

            {/* ERROR HANDLING */}
            {errors && 
                    errors.map((item, index) => ( 
                    <p style={{color : "orange"}} key={index}>{item}</p>)) 
            }

            {/* TITLE INPUT */}
            <div className="row"> 
                <label htmlFor="title">Title:</label>
                <input id="title" name='title' type="text" value={product.title} onChange={ changeHandler }/>
            </div>

            {/* PRICE INPUT */}
            <div className="row"> 
                <label htmlFor="price">Price:</label>
                <input id="price" name='price' type="number" value={product.price} onChange={ changeHandler } />
            </div>

            {/* DESCRIPTION INPUT */}
            <div className="row"> 
                <label htmlFor="description">Description:</label>
                <input id="description"  name='description' type="text" value={product.description} onChange={ changeHandler } />
            </div>

            <button type="submit">Submit</button> 
            
        </form>
    </>
  )
}

export default ProductForm