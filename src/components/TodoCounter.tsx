import { type UseTodoType } from '@/hooks'
import '../styles/components/TodoCounter.css'

interface TodoCounterProps {
  completedTodos: UseTodoType['completedTodos']
  totalTodos: UseTodoType['totalTodos']
}

export function TodoCounter ({ completedTodos, totalTodos }: TodoCounterProps): JSX.Element {
  return <h2 className='TodoCounter'>{`Has completado ${completedTodos} de ${totalTodos} TODOS`}</h2>
}
