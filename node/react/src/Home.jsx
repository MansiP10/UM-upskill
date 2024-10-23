import React, { useState } from 'react'
import './App.css'

function Home() {
    const [data, setdata] = useState(1);
    let a = 1;
    function IncNum(){
        setdata(data+5);
    }
    function DecNum(){
        setdata(data-5);
    }
  return ( 
    <div className='bold-header'>
        <h1>{data}</h1>
        <button onClick={IncNum}>Increment number</button>
        <button onClick={DecNum}>Decrement number</button>
    </div>
  )
}

export default Home