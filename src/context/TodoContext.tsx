import { useLocalStorage } from '../hooks/useLocalStorage'
import { type Todo, type ListOfTodos } from '@/types'
import { type ReactNode, createContext, useState } from 'react'

export interface TodoContextType {
  todos: ListOfTodos
  loading: boolean
  error: { error: boolean, message: string }
  completedTodos: number
  totalTodos: number
  searchedTodos: ListOfTodos
  deleteTodo: (idToDelete: string) => void
  toggleCompleteTodo: (idToSearch: string) => void
  searchValue: string
  setSearchValue: (newSearchValue: string) => void
}
interface TodoContextProps {
  children: ReactNode
}

export const TodoContext = createContext({
  todos: [] as ListOfTodos,
  loading: true,
  error: { error: false, message: '' },
  completedTodos: 0,
  totalTodos: 0,
  deleteTodo: (_idToDelete: string) => {},
  toggleCompleteTodo: (_idToSearch: string) => {},
  searchValue: '',
  setSearchValue: (_newSearchValue: string) => {},
  searchedTodos: [] as ListOfTodos
})

// const todoList: ListOfTodos = [
//   { id: crypto.randomUUID(), title: 'Cortar cebolla', completed: true },
//   { id: crypto.randomUUID(), title: 'Tomar el curso de intro a React', completed: false }
// ]

export function TodoProvider ({ children }: TodoContextProps): JSX.Element {
  const [searchValue, setSearchValue] = useState('')
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage<ListOfTodos>('TODOS_V1', [])

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
    saveTodos(newTodos)
  }

  const deleteTodo = (idToDelete: string): void => {
    const newTodos = todos.filter((todo: Todo): boolean => todo.id !== idToDelete)
    saveTodos(newTodos)
  }
  return (
    <TodoContext.Provider
      value={{
        todos,
        loading,
        error,
        completedTodos,
        totalTodos,
        searchedTodos,
        deleteTodo,
        toggleCompleteTodo,
        searchValue,
        setSearchValue
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
