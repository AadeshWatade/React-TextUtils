import React, {useState} from 'react'

export default function TextForm(props){

    const [text, setText] = useState('Enter Text')

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Successfully converted to UpperCase","success")
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Successfully converted to LowerCase","success")
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied Successfully!","success")
    }

    const handleSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
    }

    const clearText = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Text removed", "success")
        }

    return (
        <>
        <div className="container">
            <h1 className="my-3">{props.heading}</h1>
            <div className="mb-3"  >
                <textarea className="form-control"  value={text} style={{backgroundColor:props.mode==='dark'?'#0b0e10':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="9"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleUpClick}>UpperCase</button>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleLoClick}>LowerCase</button>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={clearText}>ClearText</button>
            <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleSpaces}>Remove Spaces</button>
        </div>
        <div className="container my-3">
            <h3>Your text summary</h3>
            <p><b>{text.split(/\s/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
            {/* <p><b>{text.endsWith===" "?text.split('  ').length-1:text.split(' ').length}</b> words and <b>{text.length}</b> characters</p> */}
            <p>Can be read in approximately <b>{text.split(' ').filter((element)=>{return element.length!==0}).length * 0.005}</b> minute(s)</p>
        </div>


        </>
    )
}
