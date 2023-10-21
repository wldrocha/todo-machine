import { useContext } from 'react'
import { IconCheck, IconClose } from '.'
import '../styles/components/TodoItem.css'
import { type Todo } from '../types.d'
import { TodoContext } from '../context'

interface TodoItemProps extends Todo {
  toggleCompleteTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export const TodoItem = ({ id, title, completed }: TodoItemProps): JSX.Element => {
  const { toggleCompleteTodo, deleteTodo } = useContext(TodoContext)
  return (
    <li className='TodoItem'>
      <IconCheck
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={() => {
          toggleCompleteTodo(id)
        }}
      />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{title}</p>
      <IconClose
        className='Icon Icon-delete'
        onClick={() => {
          deleteTodo(id)
        }}
      />
    </li>
  )
}
