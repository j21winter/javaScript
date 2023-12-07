import React, { useEffect, useState} from 'react'
import AuthorForm from './AuthorForm'
import { useParams, useNavigate, Link} from 'react-router-dom'
import axios from 'axios'




const UpdateAuthor = () => {
    const { id } = useParams('') // object id from url const [ currentAuthor, setCurrentAuthor] = useState({});
    const [ currentAuthor, setCurrentAuthor ] = useState({});
    const [ errors, setErrors ] = useState("")
    const navigate = useNavigate();
    const [ loaded, setLoaded ] = useState(false) // prevent premature rendering of the form used in useEffect


    useEffect(()=> {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res)
                setCurrentAuthor(res.data)
                setLoaded(true)
            })
            .catch(err => 
                console.log(err)
                )
    },[])

    const editAuthor = ( authorParam ) => {
        axios.patch(`http://localhost:8000/api/authors/${id}`, authorParam)
            .then(res => {
                console.log(res)
                navigate(`/authors`)
            } )
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.errors.name.message)})
    }

  return (
    <div>
        {loaded && 
            currentAuthor != null ?
                <AuthorForm our 
                    title={"Update Author"}
                    onSubmitFunction={ editAuthor }
                    currentAuthor={ currentAuthor }
                    setCurrentAuthor={ setCurrentAuthor }
                    errors={errors}
                    default 
                    />
            :
            <div>
                    <p className=''>Could not find the author you were looking for...</p>
                    <p>Would you like to add the author?</p>
                    <button className='btn btn-info '> <Link className='text-reset ' to='/authors'>Add Author HERE...</Link> </button>
                </div>
            }
    </div>
  )
}

export default UpdateAuthor