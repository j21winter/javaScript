import React, {useState} from 'react'
import ProductForm from '../components/ProductFrom'
import ProductList from '../components/ProductList'

const Main = () => {

    const [ products, setProducts ] = useState([])


  return (
    <>
        <ProductForm products={products} setProducts={setProducts}/>
        <ProductList products={products} setProducts={setProducts}/>
    </>
  )
}

export default Main