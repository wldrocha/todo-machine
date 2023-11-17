import { useEffect, useMemo, useState } from 'react'
import { type TodoTitle, type ListOfTodos, type Todo } from '@/types'
import { useLocalStorage } from '.'

export interface UseTodoType {
  todos: ListOfTodos
  loading: boolean
  error: { error: boolean; message: string }
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
  sincroniceTodos: boolean
}

export const useTodos = (): UseTodoType => {
  const [searchValue, setSearchValue] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    sincroniceItem: sincroniceTodos
  } = useLocalStorage<ListOfTodos>('TODOS_V1', [])

  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = useMemo(
    () =>
      todos.filter((todo) => {
        const todoText = todo.title.toLowerCase()
        const todoSearch = searchValue.toLowerCase()
        return todoText.includes(todoSearch)
      }),
    [todos]
  )

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

  return {
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
    setIsOpenModal,
    sincroniceTodos
  }
}