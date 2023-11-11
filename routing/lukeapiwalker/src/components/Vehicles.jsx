import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import obiWan from '../assets/imgs/obi_wan_gif.gif'


const Vehicles = (props) => {

    const { id } = useParams("")
    const [results, setResults] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        setError("")
        setResults([])
        id ?
        axios.get(`https://swapi.dev/api/vehicles/${id}`)
            .then(response => {
                console.log(`https://swapi.dev/api/vehicles/${id}`)
                console.log(response.data)
                setResults([response.data])
            }).catch(err => setError(err))
        :
        axios.get(`https://swapi.dev/api/vehicles`)
            .then(response => {
                console.log(`https://swapi.dev/api/vehicles`)
                console.log(response.data.results)
                setResults(response.data.results)
            }).catch(err => setError(err))

    }, [id]
    )

  return (
    <div>
        <h2>Vehicles:</h2>
        
        {results.length < 1 ? 
        <div>
            {error ? <img src={obiWan} alt="Obi Wan Kenobi Gif" /> :<p>Loading...</p>}
        </div>
        : 
        results.map((item, index) => (
            <div key={index} style={{textAlign: "left", border:"2px solid black", borderRadius: "20px" , padding: "20px", margin:"10px"}}>
                <div>
                    <h3 style={{textDecoration: "underline", textAlign: "center"}}>{item.name}</h3>
                </div>
                <p>Details:</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Model:</th>
                            <td>{item.model}</td>
                        </tr>
                        <tr>
                            <th>Cost(credits):</th>
                            <td>{item.cost_in_credits}</td>
                        </tr>
                        <tr>
                            <th>Passengers:</th>
                            <td>{item.passengers}</td>
                        </tr>
                        <tr>
                            <th>Crew:</th>
                            <td> {item.crew}</td>
                        </tr>
                        <tr>
                            <th>Vehicle Class:</th>
                            <td> {item.vehicle_class}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ))
        }
    </div>
  )
}

export default Vehicles