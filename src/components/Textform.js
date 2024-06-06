import React,{ useState} from 'react'

export default function Textform() {

    const handleupclick = ()=>{          // on click on button it will start print in console
        console.log("you clicked on Upper" +text);
        let newText= text.toUpperCase();
        setText("you have clicked on haldleclick");
        setText (newText)
    }
    const handleonchange = (event)=>{               // it will be in textarea or input  where we have to change data 
        
        console.log("on change");             
        // setText("You Have clicked on handleclick");   // it will set data to enter your text to which ext you have used to setText
        setText(event.target.value)  // event defined above at handleonchange function
    
    }

    const [text, setText] = useState("Enter Your Text");
  return (
    
   <div className="container my-3">
    <h1 className='mt-3'>Convert Your Data below to upper</h1>
    <div className='mb-3'>
    <textarea className='form-control' onChange={handleonchange} value={text} name="name" id="mybox"  rows="8"></textarea>
    </div>
    <div>
        <button className='btn btn-primary' onClick={handleupclick}  >Conver to Upper</button>
    </div>
   </div>
   
  )
}
