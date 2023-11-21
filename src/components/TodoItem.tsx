import { type UseTodoType } from '@/hooks'
import { IconCheck, IconClose } from '.'
import '../styles/components/TodoItem.css'
import { type Todo } from '../types.d'

interface TodoItemProps extends Todo {
  toggleCompleteTodo: UseTodoType['toggleCompleteTodo']
  deleteTodo: UseTodoType['deleteTodo']
}

export const TodoItem = ({ id, title, completed, toggleCompleteTodo, deleteTodo }: TodoItemProps): JSX.Element => {
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
