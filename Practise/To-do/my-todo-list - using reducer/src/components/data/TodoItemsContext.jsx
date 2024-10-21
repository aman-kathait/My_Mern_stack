import { createContext, useReducer } from "react";
import initialtodoItems from "./initTodoItems";
import TodoItemsReducer from "./TodoItemsReducer";

export const TodoItemsContext = createContext();

export const TodoItemsProvider = ({children}) => {

  const [todoItems, dispatch] = useReducer(TodoItemsReducer, initialtodoItems);

  const addTodoItem = (todoText, todoDate) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        todoText, todoDate
      }
    })
  }

  const deleteTodoItem = (todoId) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: {
        todoId
      }
    })
  }

  return <TodoItemsContext.Provider value={{todoItems, addTodoItem, deleteTodoItem}}>
    {children}
  </TodoItemsContext.Provider>
}