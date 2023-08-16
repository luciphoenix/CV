// import { useState } from 'react'
import CVDisplay from "./Components/CVDisplay";
import CreateCV from "./Components/Create";
import Header from "./Components/Header";
import './App.css'

function App() {

  return (
    <div className='body'>
      <Header/>
      <CreateCV/>
      <CVDisplay/>
    </div>
  )
}

export default App
