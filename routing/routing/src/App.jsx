import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Display from './components/Display'

function App() {

  return (
    <>
    <BrowserRouter>

      <Routes>

        <Route path='/home' element={ <Welcome /> } />
        <Route path='/:input1/:input2?/:input3?' element={ <Display /> } />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
