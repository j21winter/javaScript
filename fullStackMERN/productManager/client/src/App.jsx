import React, { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/main'
import Product from './components/product';

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route element={<Main />} path="/products" default />
          <Route element={<Product />} path="/products/:id?" default />
        
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
