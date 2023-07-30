import React,{useState} from 'react'

export default function Textutils(props) {
    const [text, setText] = useState("")

    const toUpperCase = () => {
      let a = text.toUpperCase();
      setText(a);
    }
    const toLowerCase = () => {
      let a = text.toLowerCase();
      setText(a);
    }
    const toClearText = () => {
      setText("");
    }
  
    function copyText() {
        var copyText = document.getElementById("text");
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
      
      }
  
    let handleChange = (e) => {
      setText(e.target.value);
    }
  
    return (
    
        <div className="container my-3"  >
        <div className={`mb-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h2>Enter some Text Below:-</h2>
            <textarea  className="form-control" value = {text} id="text" rows="8" onChange={handleChange} style={{backgroundColor:props.mode==='light'?'white':'grey',
                                                                                                                  color:props.mode==='light'?'black':'white' }}></textarea>
        </div>
        <button type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mx-3`} onClick={toUpperCase}>UPPER CASE</button>
        <button type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mx-3`} onClick={toLowerCase}>lower case</button>
        <button type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mx-3` } onClick={copyText}>Copy Text</button>
        <button type="button" className={`btn btn-${props.mode==='light'?'dark':'light'} mx-3` } onClick={toClearText}>Clear</button>
        </div>
    
  )
}
