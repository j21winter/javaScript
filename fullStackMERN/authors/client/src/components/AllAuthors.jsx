import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const AllAuthors = (props) => {
    const{ allAuthors, setAllAuthors } = props 

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then( response => {
                console.log(response)
                setAllAuthors(response.data)
            }).catch(err => console.log(err))
    }, [])

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res)
                setAllAuthors(allAuthors.filter(author => author._id != id))})
            .catch(err => console.log(err))
    }

return (
    <>
        
        <Link to="/authors/new" className='fs-3'>Add an Author</Link>
        <h3 >We have quotes by</h3>
        
        <table className=' table'>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {allAuthors &&  
                allAuthors.map((author, index) => 
                    <tr key={index}>
                        <td>{author.name}</td>
                        <td><Link to={`/authors/edit/${author._id}`} className='btn btn-primary'>Edit</Link> <button className='btn btn-warning' onClick={(e) => deleteAuthor(author._id)}>Delete</button></td>
                    </tr>
                    )}
            </tbody>
        </table>
    </>
  )
}

export default AllAuthors