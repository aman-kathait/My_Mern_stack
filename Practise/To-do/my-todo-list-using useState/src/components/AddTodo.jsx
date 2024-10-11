import { useContext, useRef } from "react"
import "./AddTodo.css"
import Button from "./Button"
import { TodoItemsContext } from "./data/TodoItemsContext"
const AddTodo=()=>{
  const todoTextInput=useRef();
  const todoDateInput=useRef();
  const {addTodoItem}=useContext(TodoItemsContext);

  const addHandler=()=>{
    const todoText=todoTextInput.current.value;
    const todoDate=todoDateInput.current.value;
    todoTextInput.current.value='';
    todoDateInput.current.value='';
    addTodoItem(todoText,todoDate);
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