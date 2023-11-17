import '../styles/components/TodoCounter.css'

export function TodoCounter({ completedTodos, totalTodos }): JSX.Element {


  return <h2 className='TodoCounter'>{`Has completado ${completedTodos} de ${totalTodos} TODOS`}</h2>
}
