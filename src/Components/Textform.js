import React, {useState} from 'react'
export default function Textform(props) {

    const [text, setText] = useState(""); 
    
    function handleUpClick() {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase successfully', 'success');
    }
    function handleLowClick() {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase successfully', 'success');
    }
    function handleClearText() {
        let newText = ('');
        setText(newText);
        props.showAlert('Cleared the text successfully', 'success');
    }
    function handleCopyText() {
        navigator.clipboard.writeText(text);
        props.showAlert('Copied the text successfully', 'success');
    }
    function handleRemSpaces() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Cleared the Extra Spaces successfully', 'success');
    }

    function handleChange(event) {
        setText(event.target.value)
    }

  return (
    <>
    <div className='container my-3'>
     <h1 style= {{color: props.mode ==='dark'?'white':'black'}}>{props.heading}</h1>
     <div className="mb-3">
      <textarea className="form-control" id='myBox' onChange={handleChange} style={{backgroundColor: 
      props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} rows="8"></textarea>
     </div>
     <button disabled={text.length === 0} onClick={handleUpClick}  className='btn btn-primary mx-1 my-1'>Convert to UpperCase</button>   
     <button disabled={text.length === 0} onClick={handleLowClick}  className='btn btn-primary mx-1 my-1'>Convert to LowerCase</button>   
     <button disabled={text.length === 0} onClick={handleClearText}  className='btn btn-primary mx-1 my-1'>Clear Text</button>   
     <button disabled={text.length === 0} onClick={handleCopyText}  className='btn btn-primary mx-1 my-1'>Copy Text</button>   
     <button disabled={text.length === 0} onClick={handleRemSpaces}  className='btn btn-primary mx-1 my-1'>Remove Extra Spaces</button>   
    </div>
    <div className='container' style= {{color: props.mode ==='dark'?'white':'black'}} >
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters</p> 
      <p>{0.08 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes Read</p>  
    </div>
    
    </>
  )
}
