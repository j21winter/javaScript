import { useState } from 'react'
import './App.css'
import Tab from "./components/Tab"
function App() {

  return (
    <>
      <Tab tabs={[
        {title:"Tab1", content:"Tab 1 content", callback:() => console.log("TAB 1 CLICKED") }, 
        {title:"Tab2", content:"Tab 2 content", callback: () => console.log("TAB 2 CLICKED") },
        {title:"Tab3", content:"Tab 3 content", callback: () => console.log("TAB 3 CLICKED") }]}/>
    </>
  )
}

export default App
