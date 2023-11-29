import React, {useState} from 'react'
import axios from 'axios'

const Product = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const handleForm = (e) => {
        
        e.preventDefault // prevent refresh of the page
        // make the api call using axios
        axios.post("http://localhost:8000/", {
            title, 
            price, 
            description
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        
        // reset the state variables?
        setTitle("")
        setPrice("")
        setDescription("")
    }
  return (
    <>
        
        <h1>Product Manager</h1> {/* Title */}
        <form onSubmit={handleForm}> {/* Form */}
            <div className="row"> {/* product title input */}
                <label htmlFor="title">Title:</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="row"> {/* product price input */}
                <label htmlFor="price">Price:</label>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
            </div>
            <div className="row"> {/* product description input */}
                <label htmlFor="description">Description:</label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <button type="submit">Create</button> {/* Form Submit */}
        </form>
    </>
  )
}

export default Product