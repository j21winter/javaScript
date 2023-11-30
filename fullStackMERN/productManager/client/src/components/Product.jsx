import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

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

    const navigateHome = () => {
        navigate('/products')
    }

  return (
    // some type of map function to display the product
    <>
        <h1>{product.title}</h1>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>

        <button onClick={navigateHome}>HOME</button>
    </>
  )
}

export default Product