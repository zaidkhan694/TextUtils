import React, { useState } from 'react';

export default function TextForm(props){
    const handleUpClick = () =>
    {
        let toUpperCase = text.toUpperCase();
        setText(toUpperCase);
        props.showAlert("UpperCased","success");
    }
    const handleLcClick = () =>
    {
        let toLowerCase = text.toLowerCase();
        setText(toLowerCase);
        props.showAlert("LowerCased","success");
    }
    const handleClearClick = () =>
    {
        let clear ="";
        setText(clear);
        props.showAlert("Cleared","success");
    }
    const handleOnChange = (event) =>
    {
        console.log("On Change")
        setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (
      <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
       <h3>{props.heading}</h3>
<div className="mb-3">
  <textarea className="form-control" value={text} id="exampleFormControlTextarea1" placeholder='Enter your text here' onChange={handleOnChange} rows="10"
  style={{backgroundColor:props.mode==='light'?'white':'black' , color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
    <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'info':'success'} mx-1 my-1 `} onClick={handleUpClick}>Convert To UpperCase</button>
    <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'info':'success'} mx-1 my-1`} onClick={handleLcClick}>Convert To LowerCase</button>
    <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-1 my-1" style={{color:props.mode==='dark'?'white':'black'}}>
      <h4>Your text summary</h4>
      {
        <p><b>{text.split(" ").length - 1}</b> words and <b>{text.length}</b> characters</p>
      }
      <h4>Time to read</h4>
      <p>Takes <b>{0.008 * (text.split(" ").length-1)}</b>  min to read </p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
                                          }
