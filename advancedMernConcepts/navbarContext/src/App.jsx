import React, { useState } from 'react'

import Navbar from './components/Navbar'
import FormWrapper from './components/FormWrapper'
import Wrapper from './components/Wrapper'

import MyContext from './context/myContext'

function App() {
  const [name, setName] = useState('')

  return (
    <>
      <MyContext.Provider value={{name, setName}}>
        <Wrapper >
          <Navbar />
          <FormWrapper />
        </Wrapper>
      </MyContext.Provider>
    </>
  )
}

export default App
