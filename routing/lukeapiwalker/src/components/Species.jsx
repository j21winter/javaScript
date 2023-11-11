import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import obiWan from '../assets/imgs/obi_wan_gif.gif'

const Species = (props) => {
    // ! This works but also doesn't work and is getting confusing
    // useEffect(() => {
    //     axios.get(`https://swapi.dev/api/species${id ? "/" + id : ""}`)
    //         .then(response => {
    //             console.log("SPECIES DONE")
    //             console.log(response)
    //             setCompiledData(...response.data.results)
    //             if(response.data.next){
    //                 let pages = Math.ceil(response.data.count / response.data.results.length)
    //                 console.log("PAGES" + pages)

    //                 for(let i = 2; i <= pages; i++){
    //                     axios.get(`https://swapi.dev/api/species/?page=${i}`)
    //                     .then(response => {
    //                         console.log("page " + i)
    //                         setCompiledData(...compiledData, ...response.data.results)
    //                     })
    //                 }
    //             }
    //         })
    //     }, [id])

    const { id } = useParams("")
    const [results, setResults] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        setError("")
        setResults([])
        id ?
        axios.get(`https://swapi.dev/api/species/${id}`)
            .then(response => {
                console.log(`https://swapi.dev/api/species/${id}`)
                console.log(response.data)
                setResults([response.data])
            }).catch(err => setError(err))
        :
        axios.get(`https://swapi.dev/api/species`)
            .then(response => {
                console.log(`https://swapi.dev/api/species`)
                console.log(response.data.results)
                setResults(response.data.results)
            }).catch(err => setError(err))

    }, [id]
    )

  return (
    <div>
        <h2>Species:</h2>
        
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
                            <th>Classification:</th>
                            <td>{item.classification}</td>
                        </tr>
                        <tr>
                            <th>Designation:</th>
                            <td>{item.designation}</td>
                        </tr>
                        <tr>
                            <th>Average Lifespan:</th>
                            <td>{item.average_lifespan}</td>
                        </tr>
                        <tr>
                            <th>Language:</th>
                            <td> {item.language}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        ))
        }
    </div>
    )
}

export default Species
