import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

import axios from 'axios';

import Chat from './components/Chat';
 
function App() {
  const [username, setUsername] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [allMessages, setAllMessages] = useState([])
  
  // NOTE  initialize the socket with the callback 
  const [socket] = useState(() => io(':8000'));
 
  useEffect(() => {
    console.log('Socket Running');
  
    // Event listener for 'welcome' event
    const welcomeListener = data => console.log(data.message);
    socket.on('welcome', welcomeListener);
  
    // On load, get all messages from the db and set it to the state
    axios.get('http://localhost:8000/api/messages')
      .then(response => {
        console.log("Getting all messages");
        console.log(response.data);
        setAllMessages(response.data);
      })
      .catch(error => console.error(error));
  
    // When 'newMessageAvailable' is emitted by the server, update the state with the new message
    const newMessageListener = data => {
      setAllMessages(prevMessages => [...prevMessages, data]);
    };
    socket.on('newMessageAvailable', newMessageListener);
  
    // Cleanup function
    return () => {
      socket.off('welcome', welcomeListener);
      socket.off('newMessageAvailable', newMessageListener);
    };
  }, [socket]);
 


    return (
    <div className="App mt-3 ">
      <h1 className='text-center'>MERN Chat</h1>
      {!submitted ? 
      (
        <div className="nameInput text-center  mt-5">
          <h3>Get started right now!</h3>
          <p>I want to start chatting with the name...</p>
          <form className='d-flex align-items-center justify-content-center column-gap-1 'onSubmit={(e) => setSubmitted(true)}>
            <input type="text" className='form-control w-25' onChange={(e) => setUsername(e.target.value)}/>
            <button type="submit" className='btn btn-primary'>Start Chatting</button>
          </form>
        </div>
      ) :
      (
        <Chat allMessages={allMessages} socket={socket} username={username}/>
      )
      }
    </div>
  );
}
 
export default App;