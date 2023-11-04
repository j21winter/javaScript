import React, { useState } from 'react'

const Form = (props) => {
// STATE VARIABLES
    const [input, setInput] = useState("")

// ADD A NEW TODO USING PROPS CALLBACK FUNCTION
    const addTodo = (e) => {
        // preventing the refresh
        e.preventDefault()

        // testing that submit has not been hit in error
        if(input.length > 0){

            // using the callback function to add a new todo to our list
            props.createTodo(input)

            // reset input variable to reset the form input placehoder to empty
            setInput("")
        }
    }

// Handle storing input value onChange()
    const handleInput = (e) => {
        // set the input variable to the current input value
        setInput(e.target.value)
    }

  return (
    <>
        <form onSubmit={ addTodo }>
            <div>
                <label htmlFor="todo">Create Todo: </label>
                <input type="text" name='todo' id='todo' value={ input } onChange={ handleInput }/>
            </div>
                <button type="submit">Add</button>
        </form>
    </>
  )
}

export default Form