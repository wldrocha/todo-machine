import { useLocalStorage } from '../hooks/useLocalStorage'
import { type Todo, type ListOfTodos, type TodoTitle } from '@/types'
import { type ReactNode, createContext, useState } from 'react'

export interface TodoContextType {
  todos: ListOfTodos
  loading: boolean
  error: { error: boolean, message: string }
  completedTodos: number
  totalTodos: number
  addTodo: (title: TodoTitle) => void
  searchedTodos: ListOfTodos
  deleteTodo: (idToDelete: string) => void
  toggleCompleteTodo: (idToSearch: string) => void
  searchValue: string
  setSearchValue: (newSearchValue: string) => void
  isOpenModal: boolean
  setIsOpenModal: (newIsOpenModal: boolean) => void
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
  addTodo: (_title: TodoTitle) => {},
  deleteTodo: (_idToDelete: string) => {},
  toggleCompleteTodo: (_idToSearch: string) => {},
  searchValue: '',
  setSearchValue: (_newSearchValue: string) => {},
  searchedTodos: [] as ListOfTodos,
  isOpenModal: false,
  setIsOpenModal: (_newIsOpenModal: boolean) => {}
})

// const todoList: ListOfTodos = [
//   { id: crypto.randomUUID(), title: 'Cortar cebolla', completed: true },
//   { id: crypto.randomUUID(), title: 'Tomar el curso de intro a React', completed: false }
// ]

export function TodoProvider ({ children }: TodoContextProps): JSX.Element {
  const [searchValue, setSearchValue] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage<ListOfTodos>('TODOS_V1', [])

  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.title.toLowerCase()
    const todoSearch = searchValue.toLowerCase()
    return todoText.includes(todoSearch)
  })

  const addTodo = ({ title }: TodoTitle): void => {
    const newTodos = [...todos]
    newTodos.push({
      title,
      completed: false,
      id: crypto.randomUUID()
    })
    saveTodos(newTodos)
  }

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
        addTodo,
        searchedTodos,
        deleteTodo,
        toggleCompleteTodo,
        searchValue,
        setSearchValue,
        isOpenModal,
        setIsOpenModal
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
