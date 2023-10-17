import './App.css'
import { CreateTodoButton, TodoCounter, TodoItem, TodoList, TodoSearch } from './components'

function App (): JSX.Element {
  return (
    <>
      <TodoCounter completedTodo={12} totalTodos={17} />

      <TodoSearch />
      <TodoList>
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
