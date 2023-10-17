import { type ReactNode } from 'react'

interface TodoListProps {
  children: ReactNode
}
export function TodoList ({ children }: TodoListProps): JSX.Element {
  return <ul>{children}</ul>
}
