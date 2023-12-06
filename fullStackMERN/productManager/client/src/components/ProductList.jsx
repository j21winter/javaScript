import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const ProductList = (props) => {
    const {productList, setProductList} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data)
                setProductList(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteProduct = (productId) => {
        // Make the API call to delete the product using the product id
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(deletedProduct => {
                console.log(deletedProduct)
                setProductList(productList.filter(product => product._id != productId))
            })
            .catch(err => console.log(err))
    }

  return (
    <>
        <h1>LIST COMPONENT</h1>
            {productList.map((product, index) => (
                <div key={index}>
                    <p >
                        Title:{product.title},
                        Price:{product.price},
                        Description: {product.description}
                    </p>
                    <Link to={`/products/${product._id}`}>See Product</Link>
                    <Link to={`/products/edit/${product._id}`}>Edit Product</Link>
                    <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
                </div>
            )) 
            }
    </>
  )
}

export default ProductList