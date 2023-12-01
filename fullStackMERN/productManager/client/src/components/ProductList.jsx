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

    const seeProduct = (id) => {
        navigate(`/products/${id}`)
    }

    const editProduct = (id) => {
        navigate(`/products/edit/${id}`)
    }

  return (
    <>
        <h1>LIST COMPONENT</h1>
            {products.map((product, index) => (
                <div>
                    <p key={index}>
                        Title:{product.title},
                        Price:{product.price},
                        Description: {product.description}
                    </p>
                    <button onClick={() => seeProduct(product._id)} >See Product </button>
                    <button onClick={() => editProduct(product._id)} >Edit Product </button>
                </div>
            )) 
            }
    </>
  )
}

export default ProductList