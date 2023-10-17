interface TodoCounterProps {
  completedTodo: number
  totalTodos: number
}
export function TodoCounter ({ completedTodo, totalTodos }: TodoCounterProps): JSX.Element {
  return (
      <h2>{`Has completado ${completedTodo} de ${totalTodos} TODOS`}</h2>
  )
}
