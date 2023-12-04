import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = (props) => {
    const {products, setProducts} = props
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState(false)
    const handleForm = (e) => {
        
        e.preventDefault() // prevent refresh of the page
        setErrors(false) // reset the errors each time we resubmit
        // make the api call using axios
        axios.post("http://localhost:8000/api/products", {
            title, 
            price, 
            description
            })
            .then(res => {
                if(res.data.errors){
                    let errorMessages = []
                    for(const error in res.data.errors){
                        errorMessages.push(res.data.errors[error].message)
                    }
                    setErrors(errorMessages)
                } else {
                    console.log(res.data) // double check what has come back and find the product object specifically
                    setProducts([...products, res.data ]) // update products list by spreading the current "products" and adding in our new product object
                    // reset state used in the form...
                    setTitle("")
                    setPrice("")
                    setDescription("")
                }
            })
            .catch(err => console.log(err))
    }
  return (
    <>
        
        <h1>Product Manager</h1> {/* Title */}
        <form onSubmit={handleForm}> {/* Form */}
            {errors ? errors.map((item, index) => (
                <p style={{color : "orange"}} key={index}>{item}</p>
                )) : null}
            <div className="row"> {/* product title input */}
                <label htmlFor="title">Title:</label>
                <input id="title" name='title' type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="row"> {/* product price input */}
                <label htmlFor="price">Price:</label>
                <input id="price" name='price' type="number" value={price} onChange={e => setPrice(e.target.value)} />
            </div>
            <div className="row"> {/* product description input */}
                <label htmlFor="description">Description:</label>
                <input id="description"  name='price' type="text" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <button type="submit">Create</button> {/* Form Submit */}
        </form>
    </>
  )
}

export default ProductForm