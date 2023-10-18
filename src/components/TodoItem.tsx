import { IconCheck, IconClose } from '.'
import '../styles/components/TodoItem.css'
import { type Todo } from '../types.d'

export const TodoItem = ({ title, completed }: Todo): JSX.Element => {
  return (
    <li className="TodoItem">
    <IconCheck className={`Icon ${completed && 'Icon-check--active'}`} />
    <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
      {title}
    </p>
    <IconClose className="Icon Icon-delete" />
    {/* <span className="Icon Icon-delete">
      X
    </span> */}
  </li>
  )
}
