import React, { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/main'

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route element={<Main />} path="/" default />
        
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
