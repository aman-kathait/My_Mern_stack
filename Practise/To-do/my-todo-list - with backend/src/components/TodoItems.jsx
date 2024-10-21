import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "./data/TodoItemsContext"

const TodoItems=()=>{
  const {todoItems}=useContext(TodoItemsContext);
  return <>
  {todoItems.map((item)=>(
        <TodoItem key={item.todoText} id={item.id} todoText={item.todoText} todoDate={item.todoDate}/>
        ))}
  </>
}
export default TodoItems;