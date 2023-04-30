import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');//wheather dark mode enable or not

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');   
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Has Been Enabled","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has Been Enabled","success");
    }
  }
  return (
    <>
  <Router>
  <Navbar title="TextUtils"  aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}  />
  <Alert alert={alert} />
   <div className="container my-3"> 
   <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyse Below"  mode={mode}/>}>
          </Route>
   </Routes>
   </div>
   </Router>
 </>
  );
}

export default App;
