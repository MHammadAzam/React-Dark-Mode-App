import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
  
  const [text, setText] = useState('') // HOOKS

  const ToUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText)
    // setText = " you have changed text value" u can change value of text using settext.
  }

  const Tolowercase = () =>{
     let newValue = text.toLowerCase();
     setText(newValue)
  }
  const CopyText = () =>{
    if(text){
     navigator.clipboard.writeText( text )
     alert("Text Copied to clipboard")
     }
     else{
      alert("Enter something to copy")
     }
  }
  const ClearText = () =>{
   setText("");
  }
  const RemoveSpaces = ()=>{
    let newText = text.split(" ").join("");
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }


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
        <button disabled = {text.length==0} type="submit" className="btn btn-primary" onClick={ToUppercase}>Convert to upper case</button>
        <button disabled = {text.length==0} type="submit" className="btn btn-primary mx-3 my-3" onClick={Tolowercase}>Convert to lower case</button>
        <button disabled = {text.length==0} type="submit" className="btn btn-primary mx-2 my-3 w-45" onClick={CopyText}>Copy text</button>
        <button disabled = {text.length==0} type="submit" className="btn btn-primary mx-2 my-3" onClick={ClearText}>Clear text</button>
        <button disabled = {text.length==0} type="submit" className="btn btn-primary mx-2 my-3" onClick={RemoveSpaces}>Remove spaces</button>
      </form>
    </div>
    <div className="container">
      <h1>your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read this</p>
      <h2>Preview Text</h2>
      <p>{text.length > 0 ? text : "Enter text here"}</p>
    </div>
    </>
  )
}
