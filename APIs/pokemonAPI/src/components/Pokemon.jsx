import React, { useEffect, useState } from 'react'


const Pokemon = (props) => {

    const [pokeList, setPokeList] = useState([])

    useEffect( () => {
        fetch ("https://pokeapi.co/api/v2/pokemon/?limit=1300")
        .then(response => {
            // Check if the response was successful. If not return and error. 
            if (!response.ok) {
                throw new Error('Network response was not ok');
                }
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
            setPokeList(response.results)
            
        }).catch(err=>
            console.log(err))
        },[])

    return (
        <>
        <ul>
            {
                pokeList.map((item, index) =>
                // create a list item with a key, and a capitalized name, justified to the left
                    <li style={{textAlign:"left"}} key={index}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</li>
                )
            }
        </ul>
        </>
    )
    }

export default Pokemon