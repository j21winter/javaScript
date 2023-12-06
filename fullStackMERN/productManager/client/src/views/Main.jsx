import React, {useState} from 'react'
import axios from 'axios'

// COMPONENTS
import ProductForm from '../components/ProductFrom'
import ProductList from '../components/ProductList'

const Main = () => {

    const [productList, setProductList ] = useState([])
    const [errors, setErrors] = useState(false)
    const [product, setProduct] = useState({title:"",price:"",description:""})

    const createProduct = productParam => {
      setErrors(false) // reset the errors each time we resubmit
      axios.post("http://localhost:8000/api/products", productParam) // make the api call using axios
          .then(res => {
              console.log(res)
              if(res.data.errors){
                  console.log("errors FOund")
                  let errorMessages = []
                  // for(const error in res.data.errors){
                  //     errorMessages.push(res.data.errors[error].message)
                  // }
                  Object.values(res.data.errors).forEach((item) => errorMessages.push(item.message))
                  setErrors(errorMessages)
              } else {
                  console.log(res.data) // double check what has come back and find the product object specifically
                  setProductList([...productList, res.data ]) // update products list by spreading the current "products" and adding in our new product object
                  setProduct({title:"",price:"",description:""}) // reset state used in the form...
              }
          })
          .catch(err => console.log(err))
  }

  return (
    <>
        <h1>Product Manager</h1> {/* Title */}
        <h2>Create Product</h2>
        <ProductForm initialProduct={product} onSubmitProps={createProduct} errors={errors} />
        <ProductList productList={productList} setProductList={setProductList}/>
    </>
  )
}

export default Main