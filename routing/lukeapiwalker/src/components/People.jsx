import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import obiWan from '../assets/imgs/obi_wan_gif.gif'


const People = (props) => {
    const { id } = useParams("")
    const [results, setResults] = useState([])
    const [error, setError] = useState("")
    const [homeWorld, setHomeWorld] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setError("")
        setResults([])
        setHomeWorld("")
        id ?
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(`https://swapi.dev/api/people/${id}`)
                console.log(response.data)
                setResults([response.data])
                fetchHomeWorld(response.data.homeworld)
            }).catch(err => setError(err))
        :
        axios.get(`https://swapi.dev/api/people`)
            .then(response => {
                console.log(`https://swapi.dev/api/people`)
                console.log(response.data.results)
                setResults(response.data.results)
                
            }).catch(err => setError(err))
            
    }, [id]
    )

    const fetchHomeWorld = (link) => {
        console.log("GETTING HOME WORLD")
        console.log(link)
        return axios.get(link)
            .then(response => {
                console.log(response.data.name)
                console.log(homeWorld)
                setHomeWorld([response.data.name])
            })
            .catch(err => console.log("homePlanet Error:\n" + err))
    }

    const navId = (item) => {
        let url = item.url
        console.log(url)
        let splitUrl = url.split('/')
        console.log(splitUrl)
        let urlId = ''
        for( let i = splitUrl.length; !urlId; i--){
            if(splitUrl[i]){
                urlId = splitUrl[i]
                console.log(urlId)
            }
        }
        navigate(`/people/${urlId}`)
    }

  return (
    <div>
        <h2>People:</h2>
        <p style={{color: "red"}}>{error ? error.message + "\nThese aren't the droids your looking for..." : "" }</p>
        
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
                            <th>Birth Year:</th>
                            <td>{item.birth_year}</td>
                        </tr>
                        <tr>
                            <th>Height:</th>
                            <td>{item.height}</td>
                        </tr>
                        <tr>
                            <th>Weight:</th>
                            <td>{item.mass}</td>
                        </tr>
                        <tr>
                            <th>Eye Color:</th>
                            <td> {item.eye_color}</td>
                        </tr>
                        <tr>
                            <th>Home Planet:</th>
                            <td>{id ?
                                homeWorld :
                                <button onClick={(e) => navId(item)}>See profile for details</button>
                                }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ))
        }
    </div>
    )
    }

export default People