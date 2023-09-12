import { useState } from 'react'
import CVDisplay from "./Components/CVDisplay";
import CreateCV from "./Components/Create";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './App.css'

function App() {
  const [fname, setFname] = useState('what')
  const [gen, setGen] = useState('hnjn')
  const cgen = (e) => {
    setGen(e.target.value)
  }
  const cFname = (e) => {
    setFname(e.target.value)
  }
  return (
    <div className='body'>
      <Header/>
      <CreateCV fname={fname} cFname={cFname} cgen={cgen}/>
      <CVDisplay fname={fname} gen={gen} />
      < Footer />
    </div>
  )
}

export default App
