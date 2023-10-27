import './App.css'
import PersonCard from './components/PersonCard'

function App() {

  return (
    <div>
      <PersonCard firstName={"Jonny"} lastName={"Winter"} age={29} hairColor={"Brown"} />
      <PersonCard firstName={"Amy"} lastName={"Winter"} age={30} hairColor={"Brown"} />
      <PersonCard firstName={"Indi"} lastName={"Winter"} age={1} hairColor={"Blonde"} />
      <PersonCard firstName={"Janine"} lastName={"Hulin"} age={52} hairColor={"Blonde"} />
    </div>
  )
}

export default App
