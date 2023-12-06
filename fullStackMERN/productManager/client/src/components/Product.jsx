import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const Product = (props) => {
    const navigate = useNavigate() // for delete button callback function routing
    const { id } = useParams("") // id param
    const [ product, setProduct ] = useState({}) // store the product
    
    // API CALL FOR THE CURRENT PRODUCT //
    useEffect(() => { 
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
            <DeleteButton 
                productId={product._id} 
                successCallback={() => navigate('/products')}
            />
        </div>
    </>
  )
}

export default Product