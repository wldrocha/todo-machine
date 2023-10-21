import { useContext } from 'react'
import { TodoContext, type TodoContextType } from '../context'
// import { TodoContext } from '../context/TodoContext'
import '../styles/components/TodoCounter.css'

export function TodoCounter (): JSX.Element {
  const { completedTodos, totalTodos } = useContext<TodoContextType>(TodoContext)

  return <h2 className='TodoCounter'>{`Has completado ${completedTodos} de ${totalTodos} TODOS`}</h2>
}
