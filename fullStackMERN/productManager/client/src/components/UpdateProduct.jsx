import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

// ! COMPONENTS
import ProductForm from './ProductFrom';

const UpdateProduct = (props) => {
    const { id } = useParams(''); // useParams to get the product id from the url
    const navigate = useNavigate();
    // I will need state to remember the items in my product details
    const [ product, setProduct ] = useState({ title: "", price: "", description: ""});

    // I need to make a get call to the DB using axios to pre fill my form with my product data
    useEffect(() => {
      axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
          console.log(res.data);
          setProduct({ 
            title: res.data.title,
            price: res.data.price,
            description: res.data.description
          });
        })
        .catch(err => console.log(err));
    }, []);

    // onChange event handlers //!Removed when migrating to personForm
    // const changeHandler = e => {
    //   setProduct({
    //     ...product,
    //     [e.target.name] : e.target.value
    //   });
    // }

    // I will need an onsubmit handler for the form to make a patch request using axios
    const updateProduct = (e) => {
      e.preventDefault();
      axios.patch(`http://localhost:8000/api/products/${id}`, product)
        .then(updatedItem => {
          console.log(updatedItem);
          navigate(`/products/${id}`)
        })

    } 

    return (
      //TODO Reusable code from my ProductForm Component
      <>
        <ProductForm product={product} setProduct={setProduct} onSubmitProps={updateProduct}/> 
      </>
      // Return the form pre filled and allow the user to edit and submit
      // <>
      //   <form onSubmit={handleSubmit}>
      //     <div className="row"> {/* product title input */}
      //       <label htmlFor="title">Title:</label>
      //       <input id="title" name='title' type="text" value={product.title} onChange={ changeHandler } />
      //     </div>
      //     <div className="row"> {/* product price input */}
      //       <label htmlFor="price">Price:</label>
      //       <input id="price" name='price' type="number" value={product.price} onChange={ changeHandler } />
      //     </div>
      //     <div className="row"> {/* product description input */}
      //       <label htmlFor="description">Description:</label>
      //       <input id="description" name='description' type="text" value={product.description} onChange={ changeHandler } />
      //     </div>
      //     <button type="submit">Edit</button> {/* Form Submit */}
      //   </form>
      // </>
    )
}

export default UpdateProduct