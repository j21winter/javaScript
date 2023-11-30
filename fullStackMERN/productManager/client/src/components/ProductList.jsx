import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ProductList = (props) => {
    const {products, setProducts} = props

    useEffect(() => {
        axios.get('http://localhost:8000/find/all')
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [])

  return (
    <>
        <h1>LIST COMPONENT</h1>
        <div>
            {products.map((product, index) => (
                <p key={index}>
                    Title:{product.title},
                    Price:{product.price},
                    Description: {product.description}
                </p>
            )) 
            }
        </div>
    </>
  )
}

export default ProductList