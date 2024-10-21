import React, { useContext, useEffect, useState } from 'react'
import { TodoItemsContext } from './data/TodoItemsContext'
import { todoItemToClientModel } from './util/ModelUtil';
const LoadItems = () => {

  const {todoItems,addAllTodoItems}=useContext(TodoItemsContext);
  const [isLoading,setIsLoading]=useState(false);

  useEffect(()=>{
    setIsLoading(true)
    fetch('http://localhost:3000/todos')
      .then((res)=>res.json())
      .then((items)=>{
        const newItems=items.map(todoItemToClientModel);
        addAllTodoItems(newItems);
  })  
      .finally(()=>{
        setIsLoading(false);
      })
  },[]);

    
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && todoItems.length===0 && <p>Enjoy your day</p>}
    </>
  )
}

export default LoadItems