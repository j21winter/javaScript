import React, { useEffect, useState } from 'react'
import axios from 'axios';
const PersonForm = () => {
    //keep track of what is being typed via useState hook
    const [ firstName, setFirstName] = useState("")
    const [ lastName, setLastName] = useState("")

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        // prevent default refresh
        e.preventDefault()
        // make request to create a new person
        axios.post('http://localhost:8000/api/people', {firstName, lastName})
            .then(res => {
                console.log(res) // always console log to get used to tracking your data!
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    //! used in set up to confirm the API was working
    // useEffect(()=>{
    //     console.log('Getting API .....')
    //     axios.get("http://localhost:8000/api")
    //         .then(res=>setMessage(res.data.message))
    //         .catch(err=>console.log(err))
    // }, []);


    return (
        
        <form onSubmit={ onSubmitHandler }>
            <div className="row">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" id="firstName" onChange={ e => setFirstName(e.target.value)} />
            </div>
            <div className="row">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" id="lastName" onChange={ e => setLastName(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
export default PersonForm;