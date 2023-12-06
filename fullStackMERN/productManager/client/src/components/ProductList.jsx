import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'



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

    const removeFromDom = productId => {
        console.log("removing from dom")
        setProductList(productList.filter(product => product._id != productId))
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
                    <button><Link to={`/products/${product._id}`}>See Product</Link></button>
                    <button><Link to={`/products/edit/${product._id}`}>Edit Product</Link></button>
                    <DeleteButton productId={product._id} successCallback={ () => removeFromDom(product._id) }/>
                </div>
            )) 
            }
    </>
  )
}

export default ProductList