import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const { productId, successCallback } = props

    const deleteProduct = (e) => {
        // API call to delete the product using the product id
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(deletedProduct => {
                console.log(deletedProduct)
                successCallback()
            })
            .catch(err => console.log(err))
    }
    
  return (
    <>
        <button onClick={ deleteProduct }>Delete</button>
    </>
  )
}

export default DeleteButton