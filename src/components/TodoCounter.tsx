import '../styles/components/TodoCounter.css'
interface TodoCounterProps {
  completedTodo: number
  totalTodos: number
}
export function TodoCounter ({ completedTodo, totalTodos }: TodoCounterProps): JSX.Element {
  return (
      <h2 className="TodoCounter">{`Has completado ${completedTodo} de ${totalTodos} TODOS`}</h2>
  )
}
