import Button from "./Button"
import { TodoItemsContext } from "./data/TodoItemsContext";
import "./TodoItem.css"
import { useContext } from "react";
const TodoItem=({id,todoText,todoDate})=>{

  const {deleteTodoItem}=useContext(TodoItemsContext);
  return <div class="container">
    <div class="row additems">
      <div class="col-4 text-truncate">{todoText}</div>
      <div class="col-2">{todoDate} </div>
      <div class="col-1">
        <Button type='danger' btntext='Delete' onclickhandler={()=>deleteTodoItem(id)}/>
      </div>
    </div>
  </div>
}
export default TodoItem;