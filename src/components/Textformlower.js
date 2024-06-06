import React, { useState } from 'react'
// import {useCopyToClipboard} from 'usehooks-ts'

export default function Textformlower(props) {


    const handlelower = () => {
        // console.log("you have clicked");
        let newText = text.toLocaleLowerCase();
        // setText("you have clicked");
        setText(newText)
        props.showalert("converted to Lowercase", "success")

    }
    const handleupper = () => {

        let newTextt = text.toUpperCase();
        setText(newTextt)
        props.showalert("converted to uppercase", "success")


    }
    const changehandler = (event) => {
        // console.log("click on change handler");
        setText(event.target.value)
    }
    const handleclear=()=>{
        let newText='';
        setText(newText)
        props.showalert("All data cleared successfully", "success")
 
    }
    // const handlecopy=()=>{
    //     // let newText= value.useCopyToClipboard();
    //     copy(text)
    //     props.showalert("data copied to clipboard", "success")

    // }
    // try use this for copy 
    const copyagain=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("data copied to clipboard", "success")
             
    }
    const handlespace=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Removed Extra spaces", "success")

    }

    // const[value, copy] =useCopyToClipboard("");
    const [text, setText] = useState(""); // text word is using is from here all over in function
    return (
        <>
            <div>
                <div className="container" style={{ color:props.mode==='dark'?'white':'black' }} >
                    <h1 className='mb-3' >Covert Your data to Upper case & lower case</h1>
                    <div className="mb-3">
                    <textarea name="name"  id='myBox' style ={{backgroundColor:props.mode==='dark'?'#0d0f2f':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={changehandler} className='form-control' rows="10"></textarea>
                    </div>
                    <button className="btn btn-primary my-2 mx-3"  onClick={handlelower} >Convert To Lower Case</button>
                    <button className="btn btn-primary my-2 mx-3"  onClick={handleupper} >Convert To Upper Case</button>
                    <button className="btn btn-primary my-2 mx--3"  onClick={handleclear} >Clear</button>
                    {/* <button className="btn btn-primary my-2 mx-3"  onClick={handlecopy} >Copy</button> */}
                    <button className="btn btn-primary my-2 mx-3"   onClick={copyagain} >Copy Again</button>
                    <button className="btn btn-primary my-2 mx-3"  onClick={handlespace} >Remove extra spaces</button>

                </div>
            </div>
            <div className="container" style={{ color:props.mode==='dark'?'white':'black' }}>
                <h1 className='my-3'>Text Summary</h1>
                <p>  {text.split(" ").length} Words and  {text.length} Characters</p>
                <p> {0.008 * text.split(" ").length}  Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something to preview"}</p>
            </div>
        </>
    )
}
