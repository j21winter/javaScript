import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Chat = ({username, socket, currentRoom, allMessages}) => {
    const [myMessage, setMyMessage] = useState({user: username, message : '', room : currentRoom})
    const reversedMessages = [...allMessages].filter(message => message.room === currentRoom).reverse()

    console.log(myMessage)

    const handleMyMessage = (e) => {
        e.preventDefault()
        console.log({...myMessage, room: currentRoom})
        // note Issues here with changing the room value for the dynamic props variable. I think we need to generate separate components based on the buttons
        // note then we can send in the separate message lists
        const test = {...myMessage, room: currentRoom}
        axios.post("http://localhost:8000/api/messages", test)
            .then(res => {
                console.log(res)
                socket.emit('newMessage', myMessage)
            })
            .catch(err => console.log(err))
        setMyMessage({...myMessage, message : ''})
    }

    useEffect(()=> {
            console.log('New user joined chat')
            const newUserEntryData = {user: username, message : `${username} has entered the chat`, room: currentRoom }
            axios.post(`http://localhost:8000/api/messages`, newUserEntryData)
                .then(res => {
                    console.log(res)
                    socket.emit('newMessage', newUserEntryData)
                })
                .catch(err => console.log(err))
    },[])

    
    return (
    <div className="chat ">
        {/* <h1>{myRoom}</h1> */}
        <div className="text-display border border-2 mx-auto w-50 d-flex flex-column-reverse overflow-auto p-2" style={{height: '500px'}}>
            {reversedMessages.map((data, index) => (
                <div key={(index)} className={data.user === username ? 'mb-1 w-75' : 'text-end w-75 ms-auto' } >
                    {data.message.includes('has entered the chat') ? 
                        (
                            <p className='fst-italic'> {data.message} </p>
                        ) : (
                            <>
                                <p className='mb-0 mx-1'>{data.user}</p>
                                <div className={data.user === username ? 'text-white bg-primary rounded rounded-2 ps-1 w-75' :'text-start bg-secondary rounded rounded-2 ps-1 w-75 ms-auto'  }>
                                    <p> { data.message } </p>
                                </div>
                            </>
                        )
                        }
                </div>
            )
                    
                )}
        </div>
        <div className="input text-center mt-5">
            <form onSubmit={(e) => handleMyMessage(e)} >
            <input type="text" value={myMessage.message} onChange={(e) => setMyMessage({ ...myMessage, message: e.target.value })}/>
            <button type="submit">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Chat