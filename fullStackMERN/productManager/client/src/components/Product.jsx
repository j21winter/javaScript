import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Product = (props) => {
    const navigate = useNavigate()
    // useParams to pull the id from the url as a param
    const { id } = useParams("")
    // state to store the product
    const [ product, setProduct ] = useState({})
    // axios call to get the individual product using the id in the param
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log(res.data)
            setProduct(res.data)
        } )
        .catch(err => console.log(err))
    }, [])

    const deleteProduct = (productId) => {
        // Make the API call to delete the product using the product id
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(deletedProduct => {
                console.log(deletedProduct)
                navigate('/products')
            })
            .catch(err => console.log(err))
    }


  return (
    // some type of map function to display the product
    <>
        <h1>{product.title}</h1>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>

        <div>
            <Link to={`/products`}>Home</Link>
            <Link to={`/products/edit/${product._id}`}>Edit</Link>
            <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
        </div>
    </>
  )
}

export default Product