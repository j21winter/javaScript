import React, {useState} from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirm, setConfirm] = useState("")
    const [confirmError, setConfirmError] = useState("")

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    // CREATE USER (ON FOR SUBMIT)
    const createUser = (e) => {
        // this prevents a refresh on the page
        e.preventDefault();

        // make a newUser object
        const newUser = {firstName, lastName, email, password, confirm}
        console.log("welcome", newUser)

        // Set has been submitted to false for conditional rendering
        setHasBeenSubmitted(true)

    }

    // INPUT VALIDATIONS
    const handleFirstName = (e) => {
        const inputValue = e.target.value
        setFirstName(inputValue)
        if(inputValue < 1){
            setFirstNameError("")
        } else if(inputValue.length < 3){
            setFirstNameError("First Name must be 3 characters or longer")
        }else {
            setFirstNameError("")
        }
    }

    const handleLastName = (e) => {
        const inputValue = e.target.value
        setLastName(inputValue)
        if(inputValue < 1){
            setLastNameError("")
        } else if(inputValue.length < 3){
            setLastNameError("Last Name must be 3 characters or longer")
        }else {
            setLastNameError("")
        }
    }

    const handleEmail = (e) => {
        const inputValue = e.target.value
        setEmail(inputValue)
        if(inputValue.length < 1){
            setEmailError("")
        } else if(inputValue.length < 3){
            setEmailError("Email must be at least 3 characters long")
        } else {
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        const inputValue = e.target.value
        setPassword(inputValue)
        if(inputValue.length < 1){
            setPasswordError("")
        } else if(inputValue.length < 3){
            setPasswordError("Password must be at least 3 characters long")
        } else {
            setPasswordError("")
        }
    }

    const handleConfirm = (e) => {
        const inputValue = e.target.value
        setConfirm(inputValue)
        if(inputValue.length < 1){
            setConfirmError("")
        } else if(inputValue.length < 3){
            setConfirmError("Confirm Password must be at least 3 characters long")
        } else if(password != confirm){
            setConfirmError("Passwords do not match")
        } else {
            setPasswordError("")
        }
    }

    // RETURN COMPONENT
    return (
        <>
            <form className="form" onSubmit={createUser}>
                {/* Ternary statement for conditional rendering */}
                {
                    hasBeenSubmitted ? <h3>Thank you for submitting the form</h3> : <h3>Welcome, please submit the form below</h3>
                }
                <div className="row">
                    <label>First Name:</label>
                    <div>
                        <input type="text" value={ firstName } onChange={ handleFirstName } />
                        {/* ERROR TERARY */}
                        {
                            firstNameError ? <p> { firstNameError } </p> : ""
                        }
                    </div>
                </div>
                <div className="row">
                    <label>Last Name:</label>
                    <div>
                        <input type="text" value={lastName} onChange={ handleLastName } />
                        {/* ERROR TERARY */}
                        {
                            lastNameError ? <p> { lastNameError } </p> : ""
                        }
                    </div>
                </div>
                <div className="row">
                    <label>Email:</label>
                    <div>
                        <input type="email" value={email} onChange={ handleEmail }/>
                        {/* ERROR TERARY */}
                        {
                            emailError ? <p> { emailError } </p> : ""
                        }
                    </div>
                </div>
                <div className="row">
                    <label>Password:</label>
                    <div>
                        <input type="password" value={password} onChange={ handlePassword } />
                        {/* ERROR TERARY */}
                        {
                            passwordError ? <p> { passwordError } </p> : ""
                        }
                    </div>
                </div>
                <div className="row">
                    <label>Confirm Password:</label>
                    <div>
                        <input type="password" value={confirm} onChange={ handleConfirm } />
                        {/* ERROR TERARY */}
                        {
                            confirmError ? <p> { confirmError } </p> : ""
                        }
                    </div>
                </div>
                <div className="row submit">
                    {/* ERROR TERARY */}
                    {
                        !firstNameError && !lastNameError && !emailError && !passwordError && !confirmError ?
                        <button type="submit">Submit</button> :
                        <button type="submit" disabled>Submit</button> 
                    }
                </div>
            </form>
            <div className="info">
                <p>Your Information:</p>
                <table className="table">
                    <tbody>
                        <tr className="row">
                            <th>First Name - </th>
                            <td>{ firstName } </td>
                        </tr>
                        <tr className="row">
                            <th>Last Name - </th>
                            <td>{ lastName } </td>
                        </tr>
                        <tr className="row">
                            <th>Email - </th>
                            <td>{ email } </td>
                        </tr>
                        <tr className="row">
                            <th>Password - </th>
                            <td>{ password } </td>
                        </tr>
                        <tr className="row">
                            <th>Confirm Password - </th>
                            <td>{ confirm } </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Form;