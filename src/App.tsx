import { useContext } from 'react'
import { CreateTodoButton, TodoCounter, TodoItem, TodoList, TodoSearch, Modal, TodoForm } from './components'
import { TodoContext } from './context'
import { type Todo } from './types'

import './App.css'


function App(): JSX.Element {
  const { loading, error, searchedTodos, toggleCompleteTodo, deleteTodo, isOpenModal } = useContext(TodoContext)

  return (
    <>
      <TodoCounter />

      <TodoSearch />
      <TodoList>
        {loading && <>Cargando...</>}
        {error.error && error.message}
        {!loading && searchedTodos.length === 0 && 'No hay todos :('}

        {searchedTodos.map((todo: Todo) => (
          <TodoItem key={todo.id} toggleCompleteTodo={toggleCompleteTodo} deleteTodo={deleteTodo} {...todo} />
        ))}
      </TodoList>
      <CreateTodoButton />
      {isOpenModal && (
        <Modal>
         <TodoForm />
        </Modal>
      )}
    </>
  )
}

export default App
