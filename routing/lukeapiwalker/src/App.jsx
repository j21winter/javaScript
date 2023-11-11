import { useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Planet from './components/Planet'
import Starships from './components/Starships'
import Vehicles from './components/Vehicles'
import People from './components/People'
import Film from './components/Film'
import Species from './components/Species'
import Form from './components/Form'

function App() {

  return (
    <>
    <BrowserRouter>
      {/* form must be inside the browser router to work */}
      <Form />

      <Routes>

        <Route path='/' element=""/>
        <Route path='/planets/:id?' element={<Planet />}/>
        <Route path='/starships/:id?' element={<Starships />}/>
        <Route path='/vehicles/:id?' element={<Vehicles />}/>
        <Route path='/people/:id?' element={<People />}/>
        <Route path='/films/:id?' element={<Film />}/>
        <Route path='/species/:id?' element={<Species />}/>

      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
