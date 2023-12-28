import React from 'react'
import './App.css'
import PersonCard from './components/PersonCard'
function App() {

  return (
    <>
      <PersonCard firstName={'Jon'} lastName={'Winter'} age={29} hairColor={'Brown'}/>
      <PersonCard firstName={'Amy'} lastName={'Winter'} age={30} hairColor={'Brown'}/>
    </>
  )
}

export default App
