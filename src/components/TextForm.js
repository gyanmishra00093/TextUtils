import React, {useState} from 'react'

export default function TextForm(props) {
   const countvowels=()=>{
    let count =0;
    for(let i=0;i<text.length;i++)
    {
      if( text[i]==='a' || text[i]==='e' || text[i]==='i' ||text[i]==='o' ||text[i]==='u')
      {
        count++;
      }
      
    }
    return count;
   } 

    const handleUpClick= ()=>{
        //  console.log("uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick= ()=>{
      //  console.log("uppercase was clicked" + text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!","success");
  }


  const handleClearClick= ()=>{
    //  console.log("uppercase was clicked" + text);
    let newText=' ';
    setText(newText);
    props.showAlert("Text Cleared!","success");
    
}

    const handleOnChange= (event)=>{
        // console.log("OnChange");
        setText(event.target.value);
    }
    const handleCopy=()=>{
      console.log("i am copy");
      var text=document.getElementById("mybox");
      text.select();
      text.setSelectionRange(0,9999);
      props.showAlert("Copy to clipboard!","success");
    }

    const handleExtraSpaces= ()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces removed","success");
  }

const handleUpperCase = () =>{
  function capitalize(text) {
    props.showAlert("First Letter converted into upper case","success");
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  
}


  const upper = text.split(' ').map(capitalize).join(' ');
  setText(upper)
}
    const [text,setText]=useState('');
  return ( 
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>

        <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-3" onClick={handleUpClick} >convert to uppercase</button>

       <button className="btn btn-primary mx-3" onClick={handleLoClick} >convert to lowercase</button>
       <button className="btn btn-primary mx-3" onClick={handleClearClick} >Clear text from box</button>
       <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>copy text</button>
       <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpaces}>remove extra spaces</button>
       <button className="btn btn-primary my-3 mx-3" onClick={handleUpperCase}>first letter uppar case of every word</button>
       
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words and {text.length}  characters</p>
      <p>{0.008 *text.split(" ").length}  Minutes need to read  above text</p>
      <p> Number Of Vowels is {countvowels()}</p>
      <p> Number Of Consonant is {text.length -countvowels()}</p>
      
      <p>Length of text {text.length}</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something into textbox above to preveiw it here"}</p>
    </div>
    </>
  )
}
