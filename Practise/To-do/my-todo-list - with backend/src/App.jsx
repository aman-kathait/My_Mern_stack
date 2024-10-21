import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import LoadItems from "./components/LoadItems"
import TodoItems from "./components/TodoItems"
import { TodoItemsProvider } from "./components/data/TodoItemsContext"

function App() {
  
  return (
    <TodoItemsProvider>
      <AppName/>
      <AddTodo/>
      <LoadItems/>
      <TodoItems/>
    </TodoItemsProvider>
      
  )
}

export default App
