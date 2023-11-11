import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import obiWan from '../assets/imgs/obi_wan_gif.gif'

const Planets = (props) => {

    const { id } = useParams("")
    const [results, setResults] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        setError("")
        setResults([])
        id ?
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(`https://swapi.dev/api/planets/${id}`)
                console.log(response.data)
                setResults([response.data])
            }).catch(err => setError(err))
        :
        axios.get(`https://swapi.dev/api/planets`)
            .then(response => {
                console.log(`https://swapi.dev/api/planets`)
                console.log(response.data.results)
                setResults(response.data.results)
            }).catch(err => setError(err))

    }, [id]
    )

  return (
    <div>
        <h2>Planets:</h2>        
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
                            <th>Climate:</th>
                            <td>{item.climate}</td>
                        </tr>
                        <tr>
                            <th>Gravity:</th>
                            <td>{item.gravity}</td>
                        </tr>
                        <tr>
                            <th>Population:</th>
                            <td>{item.population}</td>
                        </tr>
                        <tr>
                            <th>Terrain:</th>
                            <td> {item.terrain}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ))
        }
    </div>
  )
}

export default Planets