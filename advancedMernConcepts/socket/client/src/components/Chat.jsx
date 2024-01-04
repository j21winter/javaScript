import React, {useState} from 'react'
import axios from 'axios'

const Chat = ({username, allMessages, socket}) => {
    const [myMessage, setMyMessage] = useState('')
    const reversedMessages = [...allMessages].reverse()
    const handleMyMessage = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/messages", {user: username, message : myMessage})
            .then(res => {
                console.log(res)
                socket.emit('newMessage', {user: username, message : myMessage})
            })
            .catch(err => console.log(err))
        setMyMessage('')
      }
    
  return (
    <div className="chat ">
        <div className="text-display border border-2 mx-auto w-50 d-flex flex-column-reverse overflow-auto p-2" style={{height: '500px'}}>
            {reversedMessages.map((data, index) =>
                <div key={(index)} className={data.user === username ? 'mb-1 w-75' : 'text-end w-75 ms-auto' } >
                    <p className='mb-0 mx-1'>{data.user}</p>
                    <div className={data.user === username ? 'text-white bg-primary rounded rounded-2 ps-1 w-75' :'text-start bg-secondary rounded rounded-2 ps-1 w-75 ms-auto'  }>
                        <p  >{data.message}</p>
                    </div>
                </div>
                    
                )}
        </div>
        <div className="input text-center mt-5">
            <form onSubmit={(e) => handleMyMessage(e)} >
            <input type="text" value={myMessage} onChange={(e) => setMyMessage(e.target.value)}/>
            <button type="submit">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Chat