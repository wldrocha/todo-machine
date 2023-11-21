import '../styles/components/CreateTodoButton.css'
import { IconPlus } from '.'
import { type UseTodoType } from '@/hooks'

export interface CreateTodoButtonProps {
  setIsOpenModal: UseTodoType['setIsOpenModal']
}
export function CreateTodoButton({ setIsOpenModal }: CreateTodoButtonProps): JSX.Element {
  const handleOpenModal = (): void => {
    setIsOpenModal(true)
  }
  return (
    <button className='CreateTodoButton' onClick={handleOpenModal}>
      <IconPlus />
    </button>
  )
}
