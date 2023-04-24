import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=> {
      let newText = text.toUpperCase();
      setText(newText)
  };   
  
  const handleOnChange = (event)=> {
    setText(event.target.value);
  };
  const handleLoClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClClick = ()=> {
    setText("");
  }
  const[text,setText] = useState("Enter text here")  
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="8" className="form-control"></textarea>
      </div>
      <button className="btn mx-2 btn-outline-primary" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn mx-2 btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn mx-2 btn-outline-secondary" onClick={handleClClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
