import { useState } from 'react'
import Navbar from '../components/Navbar'
import TextForm from '../components/TextForm'
import About from '../components/About'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light')
  const toggleswitch = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
    <Router>
       <Navbar title="Textprops" abouttitle = "About me" mode={mode} toggleswitch ={toggleswitch} /> 
       <div className="container">
         <Routes> {/* Updated from Switch to Routes */}
            <Route path="/about" element={<About />} />  {/* Updated Route syntax */}
            <Route path="/Home" element={<TextForm heading="Enter your text here" />} /> 
         </Routes>
       </div>
    </Router>
    </>
  )
}

export default App

