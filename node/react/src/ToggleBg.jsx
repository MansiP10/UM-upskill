import React, { useState } from 'react'
import './App.css'

function ToggleBg() {
    const [data, setdata] = useState(1);
    function LightBg(){
        setdata("lightbg");
    }
    function DarkBg(){
        setdata("darkbg");
    }
  return ( 
    <div className={data} >
        <button onClick={LightBg}>Light background</button>
        <button onClick={DarkBg}>Dark background</button>
    </div>
  )
}

export default ToggleBg