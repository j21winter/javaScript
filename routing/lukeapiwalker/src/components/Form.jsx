import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const Form = (props) => {
    const [selectInput, setSelectInput] = useState("")
    const [idInput, setIdInput] = useState("")
    const [searchObject, setSearchObject] = useState({select: "", id:""})
    const navigate = useNavigate()
    
    const submitSearch = (e) => {
        e.preventDefault()
        if(selectInput)
            setSearchObject({select: selectInput, id:idInput})
    }

    useEffect(() => {navigate(`${searchObject.select}/${searchObject.id}`)},[searchObject])

    
  return (
    <>
        <div>
            <form style={{display: "flex", columnGap: "10px", alignItems: "center", justifyContent: "space-evenly", margin: "0 auto"}} onSubmit={submitSearch}>
            <div>
                <label htmlFor="selectInput">Search for: </label>
                <select name="selectInput" id="selectInput" value={selectInput} onChange={(e) => setSelectInput(e.target.value)}>
                    <option value="none" defaultValue hidden> --select--  </option>
                    <option value="planets"  >Planets</option>
                    <option value="Starships"  >Starships </option>
                    <option value="vehicles"  >Vehicles</option>
                    <option value="people"  >People</option>
                    <option value="films"  >Films</option>
                    <option value="species"  >Species</option>
                </select>
            </div>
            <div>
                <label htmlFor="idInput">ID: </label>
                <input type="number" name="idInput" id="idInput" min={1} onChange={(e) => setIdInput(e.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
            </form>
            <div style={{backgroundColor: "darkgray", borderRadius: "20px" , padding: "20px", margin:"10px"}}>
                <p style={{color: "black", margin: "3px"}}>Please note: responses may take a few moments to populate</p>
                <p style={{color: "black", margin: "3px"}}> 1)Responses may take a few moments to populate</p>
                <p style={{color: "black", margin: "3px"}}> 2)Some ID numbers will not have an associated response</p>
            </div>
        </div>
    </>
  )
}

export default Form