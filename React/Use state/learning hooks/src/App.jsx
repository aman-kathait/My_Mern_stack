import { useState } from 'react'
import List from './components/List';
import './App.css'

function App() {
  const [sName,setsName]=useState(["Aman","Abhijeet","Ram","Shyam"]);
  const onClick=(event)=>{
      if (event.key==='Enter') {
        const newArr=[...sName,event.target.value];
        event.target.value='';
        setsName(newArr)
      }
  }
  return (
   
    <>
    <div>
      <List list={sName}></List>
      <input type="text" onKeyDown={onClick}/>
    </div>
      
    </>
  )
}

export default App
