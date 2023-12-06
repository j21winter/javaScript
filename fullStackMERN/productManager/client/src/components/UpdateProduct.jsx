import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

// ! COMPONENTS
import ProductForm from './ProductFrom';

const UpdateProduct = (props) => {
    const { id } = useParams(''); // useParams to get the product id from the url
    const navigate = useNavigate();
    const [ product, setProduct ] = useState({}); // I will need state to remember the items in my product details
    const [ loaded, setLoaded ] = useState(false)

    // I need to make a get call to the DB using axios to pre fill my form with my product data
    useEffect(() => {
      axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
          console.log(res.data);
          setProduct({ 
            title: res.data.title,
            price: res.data.price,
            description: res.data.description,
          });
          setLoaded(true)
        })
        .catch(err => console.log(err));
    }, []);


    // I will need an onsubmit handler for the form to make a patch request using axios
    const updateProduct = productParam => {
      axios.patch(`http://localhost:8000/api/products/${id}`, productParam)
        .then(updatedItem => {
          console.log(updatedItem);
          navigate(`/products/${id}`)
        })

    } 

    return (
      <>
        <h2>Update Product</h2>
        
        {loaded && <ProductForm product={product} setProduct={setProduct}onSubmitProps={updateProduct}/>} 
      </>
    )
}

export default UpdateProduct