import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const ProductList = (props) => {
    const navigate = useNavigate()
    const {products, setProducts} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const navigateTo = (id) => {
        navigate(`/products/${id}`)
    }

  return (
    <>
        <h1>LIST COMPONENT</h1>
            {products.map((product, index) => (
                <p onClick={() => navigateTo(product._id)} key={index}>
                    Title:{product.title},
                    Price:{product.price},
                    Description: {product.description}
                </p>
            )) 
            }
    </>
  )
}

export default ProductList