import { useState } from 'react'
import Navbar from '../components/Navbar'
import TextForm from '../components/TextForm'
import About from '../components/About'
import React from 'react'
// import './App.css'

function App() {
  const [mode, setMode] = useState('light')
  const toggleswitch = ()=>{
    if(mode==='light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
       <Navbar title="Hammad" abouttitle = "About me" mode={mode} toggleswitch ={toggleswitch} /> {/*USED TO MAKE A NAVBAR */}
       <div className="container">
       {/* <TextForm heading="Enter your text here" /> USED FOR SIMPLE TEXT TO CONVERT IT TO UPPER AND LOWER CASE */}
       <About/> {/*USED TO CONVERT A WEBSITE TO DARK MODE*/}
       </div>
       
    </>
  )
}

export default App
