// TODO Create rooms for people to go into

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

import axios from 'axios';

import Chat from './components/Chat';
 
function App() {
  const [username, setUsername] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [newRoom, setNewRoom] = useState('')
  const [currentRoom, setCurrentRoom] = useState('public')
  const [allRooms, setAllRooms] = useState([])
  const [allMessages, setAllMessages] = useState([])
  
  // NOTE  initialize the socket with the callback 
  const [socket] = useState(() => io(':8000'));
  
  useEffect(() => {
    console.log(currentRoom)
  }, [currentRoom])


  useEffect(() => {
    console.log('Socket Running');
  
    // Event listener for 'welcome' event
    const welcomeListener = data => console.log(data.message);
    socket.on('welcome', welcomeListener);

    // On load, get all messages from the db and set it to the state
    axios.get(`http://localhost:8000/api/messages`)
      .then(response => {
        console.log("Getting all messages");
        setAllMessages(response.data);
      })
      .catch(error => console.error(error));

    // On load, get all rooms from the db and set it to state
    axios.get(`http://localhost:8000/api/rooms`)
      .then(response => {
      console.log("Getting all rooms");
      setAllRooms(response.data);
      })
      .catch(error => console.error(error));

    // When 'newMessageAvailable' is emitted by the server, update the state with the new message
    const newMessageListener = data => {
      setAllMessages(prevMessages => [...prevMessages, data]);
    };
    socket.on('newMessageAvailable', newMessageListener);
  
    const allRoomsListener = data => {
      setAllRooms(data)
    };
    socket.on('allRooms', allRoomsListener);

    const newRoomsListener = data => {
      setAllRooms(prevRooms => [...prevRooms, data])
    }
    socket.on('newRoomAvailable', newRoomsListener)
  
    // Cleanup function
    return () => {
      socket.off('welcome', welcomeListener);
      socket.off('newMessageAvailable', newMessageListener);
      socket.off('allRooms', allRoomsListener);
    };
  }, [socket]);
  
  const createRoom = (e) => {
    e.preventDefault()
    axios.post('http://localHost:8000/api/rooms', newRoom)  
      .then(res => {
        console.log(res)
        socket.emit('newRoom', newRoom )})
      .catch(err => console.log(err))
    
  }


    return (
    <div className="App mt-3 ">
      <h1 className='text-center'>MERN Chat</h1>
      {!submitted ? 
      (
        <div className="nameInput text-center  mt-5">
          <h3>Get started right now!</h3>
          <p>I want to start chatting with the name...</p>
          <form className='d-flex align-items-center justify-content-center column-gap-1 ' onSubmit={(e) => setSubmitted(() => true)}>
            <input type="text" name="userName" className='form-control w-25' onChange={(e) => setUsername(e.target.value)}/>
            <button type="submit" className='btn btn-primary'>Start Chatting</button>
          </form>
        </div>
      ) :
      ( 
        <>
          <form onSubmit={e => createRoom(e)}>
            <label htmlFor="newRoom">Create Room</label>
            <input type="text" name='newRoom'onChange={(e) => {
              setNewRoom({title : e.target.value})
              console.log(newRoom)}}/>
            <button type="submit">go!</button>
          </form>
          <div className="rooms d-flex justify-content-evenly ">
            <button className='btn btn-primary ' onClick={() => setCurrentRoom('public')}>Public</button>
            {allRooms.map((room, index) => (
              <button key={index} className='btn btn-dark ' onClick={() => setCurrentRoom(room.title)}>{room.title}</button>
            ))}
          </div>
          <Chat currentRoom={currentRoom} allMessages={allMessages} socket={socket} username={username}/>
          {/* create buttons to enable the rooms */}
          
        </>
      )
      }
    </div>
  );
}
 
export default App;