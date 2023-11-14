import React from 'react'
import React, { useState } from 'react';

export default function navbar() {

  const [mode,setMode]=useState('light');
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');   
      document.body.style.backgroundColor='#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-a" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
       <li className="nav-item">
        <a className="nav-a" href="/about">aboutText</a>
      </li>
      
    </ul>
    <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  </div>
</nav>
    </div>
  )
}