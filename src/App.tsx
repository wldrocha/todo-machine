import { useState } from 'react'
import { type TodoId, type ListOfTodos, type Todo } from './types.d'
import { CreateTodoButton, TodoCounter, TodoItem, TodoList, TodoSearch } from './components'
import './App.css'

const todoList: ListOfTodos = [
  { id: crypto.randomUUID(), title: 'Cortar cebolla', completed: true },
  { id: crypto.randomUUID(), title: 'Tomar el curso de intro a React', completed: false }
]

function App (): JSX.Element {
  const [searchValue, setSearchValue] = useState('')
  const [todos, setTodos] = useState<ListOfTodos>(todoList)

  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.title.toLowerCase()
    const todoSearch = searchValue.toLowerCase()
    return todoText.includes(todoSearch)
  })

  const toggleCompleteTodo = (idToSearch: string): void => {
    const newTodos = todos.map((todo: Todo): Todo => {
      if (todo.id === idToSearch) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <>
      <TodoCounter completedTodo={completedTodos} totalTodos={totalTodos} />

      <TodoSearch updateSearchValue={setSearchValue} searchValue={searchValue} />
      <TodoList>
      {searchedTodos.map((todo) => (
        <TodoItem key={todo?.id} toggleCompleteTodo={toggleCompleteTodo} {...todo}/>
      ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
