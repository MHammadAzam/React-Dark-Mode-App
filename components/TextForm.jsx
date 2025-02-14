import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    // setText = " you have changed text value" u can change value of text using settext.
  }

  const Tolowercase = () =>{
     let newValue = text.toLowerCase();
     setText(newValue)
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('') // HOOKS

  return (
    <>
    <div>
      <form>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={text} onChange={handleOnChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
        <button type="submit" className="btn btn-primary mx-3" onClick={Tolowercase}>Convert to lower case</button>
      </form>
    </div>
    <div className="container">
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read this</p>
      <h2>Preview Text</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
