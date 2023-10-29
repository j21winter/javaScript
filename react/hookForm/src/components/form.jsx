import React, {useState} from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")


    // const createUser = (e) => {

    // }

    return (
        <>
            <form className="form">
                <div className="row">
                    <label>First Name:</label>
                    <input type="text" onChange={ e => setFirstName(e.target.value)} />
                </div>
                <div className="row">
                    <label>Last Name:</label>
                    <input type="text" onChange={ e => setLastName(e.target.value)} />
                </div>
                <div className="row">
                    <label>Email:</label>
                    <input type="email" onChange={ e => setEmail(e.target.value)}/>
                </div>
                <div className="row">
                    <label>Password:</label>
                    <input type="password" onChange={ e => setPassword(e.target.value)} />
                </div>
                <div className="row">
                    <label>Confirm Password:</label>
                    <input type="password" onChange={ e => setConfirm(e.target.value)} />
                </div>
            </form>
            <div className="info">
                <p>Your Information:</p>
                <table className="table">
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
                </table>
            </div>
        </>
    )

}
export default Form;