import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = (props) => {
    const {initialProduct, onSubmitProps, errors} = props
    const [product, setProduct] = useState(initialProduct)

    const changeHandler = e => { // onChange event handlers
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        });
        () => console.log(product)
        }

  return (
    <>
        <form onSubmit={(e) => {
            e.preventDefault(); 
            onSubmitProps(product)

        }}> {/* Form */}
            {errors ? 
                errors.map((item, index) => ( 
                    <p style={{color : "orange"}} key={index}>{item}</p>)) 
                : null
            }
            <div className="row"> {/* product title input */}
                <label htmlFor="title">Title:</label>
                <input id="title" name='title' type="text" value={product.title} onChange={ changeHandler }/>
            </div>
            <div className="row"> {/* product price input */}
                <label htmlFor="price">Price:</label>
                <input id="price" name='price' type="number" value={product.price} onChange={ changeHandler } />
            </div>
            <div className="row"> {/* product description input */}
                <label htmlFor="description">Description:</label>
                <input id="description"  name='description' type="text" value={product.description} onChange={ changeHandler } />
            </div>
            <button type="submit">Submit</button> {/* Form Submit */}
        </form>
    </>
  )
}

export default ProductForm