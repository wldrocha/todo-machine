export interface Todo {
  id: string
  title: string
  completed: boolean
}

// Maneras de obtener el tipo de una propiedad de un type o interfaz
// export type todpTitle = Todo['id']
export type TodoId = Todo['id']
export type TodoTitle = Todo['title']
export type TodoCompleted = Todo['completed']
// export type TodoId = Pick<Todo, 'id'>
// export type TodoTitle = Pick<Todo, 'title'>
// export type TodoCompleted = Pick<Todo, 'completed'>

// todos: Array<Todo>
export type ListOfTodos = Todo[]
