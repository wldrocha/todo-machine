import '../styles/components/CreateTodoButton.css'
import { IconPlus } from '.'
import { useContext } from 'react'
import { TodoContext } from '../context'

export function CreateTodoButton (): JSX.Element {
  const { setIsOpenModal } = useContext(TodoContext)

  const handleOpenModal = (): void => {
    setIsOpenModal(true)
  }
  return (
    <button className="CreateTodoButton" onClick={handleOpenModal}><IconPlus /></button>
  )
}
