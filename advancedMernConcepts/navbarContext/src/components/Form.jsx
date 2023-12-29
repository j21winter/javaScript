import React, {useContext} from 'react'
import myContext from '../context/myContext'

const Form = () => {
    const {name, setName} = useContext(myContext)
    const changeHandler = (e) => {
        e.preventDefault()
        console.log('Changing Name')
        setName(e.target.value)
        console.log(name)
    }
  return (
    <div>
        <form action="">
            <label htmlFor="name">Your Name:</label>
            <input type="text" value={name} onChange={(e) => changeHandler(e)} />
        </form>
    </div>
  )
}

export default Form