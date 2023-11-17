import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
  Modal,
  TodoForm,
  ChangeAlert
} from './components'
import { type Todo } from './types'

import './App.css'
import { useTodos } from './hooks/useTodos'

function App (): JSX.Element {
  const {
    addTodo,
    loading,
    error,
    searchValue,
    searchedTodos,
    completedTodos,
    totalTodos,
    toggleCompleteTodo,
    deleteTodo,
    setIsOpenModal,
    setSearchValue: updateSearchValue,
    isOpenModal,
    sincroniceTodos
  } = useTodos()

  return (
    <>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />

      <TodoSearch searchValue={searchValue} updateSearchValue={updateSearchValue} />
      <TodoList>
        {loading && <>Cargando...</>}
        {error.error && error.message}
        {!loading && searchedTodos.length === 0 && 'No hay todos :('}

        {searchedTodos.map((todo: Todo) => (
          <TodoItem key={todo.id} toggleCompleteTodo={toggleCompleteTodo} deleteTodo={deleteTodo} {...todo} />
        ))}
      </TodoList>
      <CreateTodoButton setIsOpenModal={setIsOpenModal} />
      {isOpenModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setIsOpenModal={setIsOpenModal} />
        </Modal>
      )}
      <ChangeAlert sincronice={sincroniceTodos} />
    </>
  )
}

export default App
