import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"

import TodoItems from "./components/TodoItems"
import { TodoItemsProvider } from "./components/data/TodoItemsContext"

function App() {
  
  return (
    <TodoItemsProvider>
      <AppName/>
      <AddTodo/>
      <TodoItems/>
    </TodoItemsProvider>
      
  )
}

export default App
