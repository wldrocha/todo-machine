import { useState } from 'react'
import { type ListOfTodos } from './types.d'
import { CreateTodoButton, TodoCounter, TodoItem, TodoList, TodoSearch } from './components'
import './App.css'

const todos: ListOfTodos = [
  { id: crypto.randomUUID(), title: 'Cortar cebolla', completed: true },
  { id: crypto.randomUUID(), title: 'Tomar el curso de intro a React', completed: false }
]

function App (): JSX.Element {
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.title.toLowerCase()
    const todoSearch = searchValue.toLowerCase()
    return todoText.includes(todoSearch)
  })

  return (
    <>
      <TodoCounter completedTodo={completedTodos} totalTodos={totalTodos} />

      <TodoSearch updateSearchValue={setSearchValue} searchValue={searchValue} />
      <TodoList>
      {searchedTodos.map((todo) => (
        <TodoItem key={todo?.id} {...todo}/>
      ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
