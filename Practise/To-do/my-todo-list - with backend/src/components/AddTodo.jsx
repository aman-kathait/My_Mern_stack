import { useContext, useRef } from "react"
import "./AddTodo.css"
import Button from "./Button"
import { TodoItemsContext } from "./data/TodoItemsContext"
import { todoItemToClientModel } from "./util/ModelUtil"
const AddTodo=()=>{
  const todoTextInput=useRef();
  const todoDateInput=useRef();
  const {addTodoItem}=useContext(TodoItemsContext);

  const addHandler=()=>{
    const todoText=todoTextInput.current.value;
    const todoDate=todoDateInput.current.value;
    fetch("http://localhost:3000/todos",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        task:todoText,
        date:todoDate
      })
    }).then(res=>res.json())
    .then(serverItem=>{
      const {id,todoText,todoDate}=
      todoItemToClientModel(serverItem);
      addTodoItem(id,todoText,todoDate);
      
    })
    todoTextInput.current.value='';
    todoDateInput.current.value='';
  }

return <div class="container">
  <div class="row firstrow">
    <div class="col-4 text-truncate enter">
      <input type="text" class="form-control" placeholder="Enter Task Here" ref={todoTextInput}></input>
    </div>
    <div class="col-2 date">
      <input type="date" class="form-control" ref={todoDateInput}/>
    </div>
    <div class="col-1">
      <Button type={'success'} btntext={'Add'} onclickhandler={addHandler}/>
    </div>
  </div>
</div>
}
export default AddTodo;