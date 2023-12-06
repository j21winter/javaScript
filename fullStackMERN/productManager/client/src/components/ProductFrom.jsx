import React from 'react'

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

            {/* TITLE INPUT */}
            <div className="row"> 
                {errors.title && <p style={{color : "orange"}} >{errors.title.message}</p> }
                <label htmlFor="title">Title:</label>
                <input id="title" name='title' type="text" value={product.title} onChange={ changeHandler }/>
            </div>

            {/* PRICE INPUT */}
            <div className="row"> 
                {errors.price && <p style={{color : "orange"}} >{errors.price.message}</p> }
                <label htmlFor="price">Price:</label>
                <input id="price" name='price' type="number" value={product.price} onChange={ changeHandler } />
            </div>

            {/* DESCRIPTION INPUT */}
            <div className="row"> 
                {errors.description && <p style={{color : "orange"}} >{errors.description.message}</p> }
                <label htmlFor="description">Description:</label>
                <input id="description"  name='description' type="text" value={product.description} onChange={ changeHandler } />

            </div>

            <button type="submit">Submit</button> 
            
        </form>
    </>
  )
}

export default ProductForm