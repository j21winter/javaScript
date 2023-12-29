import React, {useContext} from 'react'
import myContext from '../context/myContext'

const Navbar = () => {
    const {name} = useContext(myContext)
  return (
    <div style={{height:"100px"}}>{name}</div>
  )
}

export default Navbar