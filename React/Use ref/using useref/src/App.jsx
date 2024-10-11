import { useRef } from 'react';
import { useState } from 'react'
import './App.css'


 


function App() {
  const [stateClick, setstateClick]=useState(0);
  const refClick=useRef(0);

  const onStateHandler=()=>{
    console.log("state");
    setstateClick(stateClick+1);
  }

  const onRefclick=()=>{
    console.log("ref");
    refClick.current++;
  }

  return (
    <>
    <h1>State clicked: {stateClick}</h1>
    <h1>Ref clicked: {refClick.current}</h1>
    <button onClick={onStateHandler}> State</button>
    <button onClick={onRefclick}>Ref</button>
    </>
  );
};

export default App;
