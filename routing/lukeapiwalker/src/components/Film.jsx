import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import obiWan from '../assets/imgs/obi_wan_gif.gif'


const Films = (props) => {
    const { id } = useParams("")
    const [results, setResults] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        setError("")
        setResults([])
        id ?
        axios.get(`https://swapi.dev/api/films/${id}`)
            .then(response => {
                console.log(`https://swapi.dev/api/films/${id}`)
                console.log(response.data)
                setResults([response.data])
            }).catch(err => setError(err))
        :
        axios.get(`https://swapi.dev/api/films`)
            .then(response => {
                console.log(`https://swapi.dev/api/films`)
                console.log(response.data.results)
                setResults(response.data.results)
            }).catch(err => setError(err))

    }, [id]
    )

  return (
    <div>
        <h2>Films:</h2>
        
        {results.length < 1 ? 
        <div>
            {error ? <img src={obiWan} alt="Obi Wan Kenobi Gif" /> :<p>Loading...</p>}
        </div>
        : 
        results.map((item, index) => (
            <div key={index} style={{textAlign: "left", border:"2px solid black", borderRadius: "20px" , padding: "20px", margin:"10px"}}>
                <div>
                    <h3 style={{textDecoration: "underline", textAlign: "center"}}>{item.title}</h3>
                </div>
                <p>Details:</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Director:</th>
                            <td>{item.director}</td>
                        </tr>
                        <tr>
                            <th>Release Year:</th>
                            <td>{new Date(item.release_date).getFullYear()}</td>
                        </tr>
                        <tr>
                            <th>Episode:</th>
                            <td>{item.episode_id}</td>
                        </tr>
                        <tr>
                            <th style={{verticalAlign:"top"}}>Opening Crawl:</th>
                            <td> {item.opening_crawl}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        ))
        }
    </div>
    )
}

export default Films