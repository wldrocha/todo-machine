import '../styles/components/CreateTodoButton.css'
import { IconPlus } from '.'
import { useTodos } from '@/hooks'

export function CreateTodoButton({ setIsOpenModal }): JSX.Element {
  const handleOpenModal = (): void => {
    setIsOpenModal(true)
  }
  return (
    <button className='CreateTodoButton' onClick={handleOpenModal}>
      <IconPlus />
    </button>
  )
}
