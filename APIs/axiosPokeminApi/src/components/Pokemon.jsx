import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = () => {

    const[pokeList, setPokeList] = useState([])

    useEffect( () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1300")
            .then(response => {
                setPokeList(response.data.results)
                })
    }, []
    )

  return (
    <>
    <ul>
        {
            pokeList.map((item, index) => 
                <li style={{textAlign:"left"}} key={index}> {item.name.charAt(0).toUpperCase() + item.name.slice(1)} </li>
            )
        }
    </ul>
    </>
  )
}

export default Pokemon