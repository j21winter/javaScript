import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const Product = (props) => {
    const navigate = useNavigate()
    const { id } = useParams("") // useParams to pull the id from the url as a param
    const [ product, setProduct ] = useState({}) // state to store the product
    
    useEffect(() => { // axios call to get the individual product using the id in the param
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log(res.data)
            setProduct(res.data)
        } )
        .catch(err => console.log(err))
    }, [])


  return (
    <>
        <h1>{product.title}</h1>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>

        <div>
            <button><Link to={`/products`}>Home</Link></button>
            <button><Link to={`/products/edit/${product._id}`}>Edit</Link></button>
            <DeleteButton productId={product._id} successCallback={() => navigate('/products')}/>
        </div>
    </>
  )
}

export default Product