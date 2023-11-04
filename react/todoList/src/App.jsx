import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'

function App() {
// STATE VARIABLES
  const [todoList, setTodoList] = useState(() => {
    // Check if there was anything stored in local storage and set it to a variable
    const savedTodos = JSON.parse(localStorage.getItem("todoList"))
    // Ternary to see if there was anthing copied from localStorage
    return savedTodos ? savedTodos : []
  })

  const persist = () => {
    setTodoList(localStorage.getItem("todoList"))
  }

// ADD NEW TODO TO LIST
  const addNewTodo = (newTodo) => {
    // Update todo list with new item. Spread exiting list of todo's and append a new one to it. 
    setTodoList([...todoList, newTodo])
    console.log("New Todo added!! ")
  }

// REMOVE TODO FROM LIST
  const removeTodo = (string) => {
    // Create a new array by filtering out the one item we want to delete
    const updatedList = todoList.filter(todo => todo != string)
    // Update your list
    setTodoList(updatedList)
  }

// PERSIST DATA THROUGH REFRESHES IN THE BROWSER
// Use effect takes in 2 parameters 1)function/side effect 2)the thing it is watching
  useEffect(() => {
    // function to save something to the browser local storage
      localStorage.setItem("todoList", JSON.stringify(todoList))
      // watch the todoList State variable
  }, [todoList])



  return (
    <>
      {/* Form will need the callback function to add a new todo */}
      <Form createTodo={ addNewTodo } />

      {/* Form will need a list of all the todos */}
      <List allTodos={ todoList } deleteTodo={removeTodo} />

    </>
  )
}

export default App
