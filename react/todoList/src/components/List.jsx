import React, {useState} from 'react'

const List = (props) => {

    const todoStyling = (index) => {
        const todoText  = document.getElementById(index)
        console.log(todoText.classList)
        todoText.classList.toggle("strikeThrough")
        todoText.parentElement.classList.toggle("complete")

    }

  return (
    <>
{/* check if there are any todos. If not render "add a new todo" */}
        {
            props.allTodos.length > 0 ? "" : "Add a new Todo to your list"
        }
        
{/* map todoList and render todo text, check box and delete button */}
            {
                props.allTodos.map((item, index)=>

                <div key={index} className="todo">
                    <p id={index} className=''> {item}</p>
                    <form onChange={(e) => todoStyling(index) }>
                        <input type="checkbox" name="" id="" />
                    </form>
                    <button className='deleteButton' onClick={(e) => props.deleteTodo(item)} >Delete</button>

                </div>
                )
            }
    </>
  )
}

export default List