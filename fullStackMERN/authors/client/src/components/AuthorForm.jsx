import React from 'react'
import { Link } from 'react-router-dom'

const AuthorForm = (props) => {
    const {title, onSubmitFunction, currentAuthor, setCurrentAuthor, errors} = props

    const submitForm = (e) => {
        e.preventDefault()
        onSubmitFunction(currentAuthor)
    }

    const changeHandler = e => { // onChange event handlers
        setCurrentAuthor({
            ...currentAuthor,
            [e.target.name] : e.target.value
            });
        }

  return (
<div className='mt-5 '>
    <h3>{title}</h3>
    <form onSubmit={submitForm}>
        <div className="mb-3 ">
            {errors && <p className='text-warning'>{errors}</p>}
            <label htmlFor="name" className='form-label'>Name:</label>
            <input type="text" name='name' className='form-control w-60' value={currentAuthor.name} onChange={ changeHandler }/>
        </div>
        <div className="d-flex justify-content-evenly align-items-center">
            <button className='btn btn-success '> <Link className='text-reset ' to='/authors'>Home</Link> </button>
            <button type="submit" className='btn btn-info'>Submit</button>
        </div>
    </form>

</ div>
  )
}

export default AuthorForm