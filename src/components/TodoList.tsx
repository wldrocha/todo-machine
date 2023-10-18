import '../styles/components/TodoList.css'
import { type ReactNode } from 'react'

interface TodoListProps {
  children: ReactNode
}
export function TodoList ({ children }: TodoListProps): JSX.Element {
  return <ul className="TodoList">{children}</ul>
}
