import './App.css'
import { type ListOfTodos } from './types.d'
import { CreateTodoButton, TodoCounter, TodoItem, TodoList, TodoSearch } from './components'

const todos: ListOfTodos = [
  { id: crypto.randomUUID(), title: 'Cortar cebolla', completed: true },
  { id: crypto.randomUUID(), title: 'Tomar el curso de intro a React', completed: false }
]

function App (): JSX.Element {
  return (
    <>
      <TodoCounter completedTodo={12} totalTodos={17} />

      <TodoSearch />
      <TodoList>
      {todos.map((todo) => (

        <TodoItem {...todo}/>
      ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
