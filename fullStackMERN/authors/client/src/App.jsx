import {Routes, Route, useNavigate} from 'react-router-dom'
import AuthorForm from './components/AuthorForm'
import AllAuthors from './components/AllAuthors'
import UpdateAuthor from './components/UpdateAuthor'
import { useState } from 'react'
import axios from 'axios'

function App() {

  const [ currentAuthor, setCurrentAuthor] = useState({name:""});
  const [ allAuthors, setAllAuthors] = useState([]);
  const [ errors, setErrors ] = useState("")
  const navigate = useNavigate();

  const createAuthor = (authorParam) => {
    axios.post("http://localhost:8000/api/authors", currentAuthor)
      .then(res => {
        console.log(res)
        setCurrentAuthor({name:""})
        navigate('/authors')
      })
      .catch(err => {
        console.log(err)
        setErrors(err.response.data.errors.name.message)})
  };



  return (
    <>
      <h1 className='display-2'>Favorite Authors</h1>
      <Routes>
        <Route path='/authors' element={ 
          < AllAuthors  
            allAuthors={allAuthors}
            setAllAuthors={setAllAuthors}
            />} />
        <Route path='/authors/new' element= {
            <AuthorForm 
              title={"Add an Author"}
              onSubmitFunction={ createAuthor }
              currentAuthor={ currentAuthor }
              setCurrentAuthor={ setCurrentAuthor }
              errors={errors}
              default 
            /> } 
        />
        <Route path='/authors/edit/:id' element={ <UpdateAuthor default /> }/>
      </Routes>
    </>

  )
}

export default App;
