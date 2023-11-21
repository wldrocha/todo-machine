import { useState } from 'react'
import '../styles/components/TodoForm.css'
import { type UseTodoType } from '@/hooks'

export interface TodoFormProps {
  addTodo: UseTodoType['addTodo']
  setIsOpenModal: UseTodoType['setIsOpenModal']
}

export function TodoForm({ addTodo, setIsOpenModal }: TodoFormProps): JSX.Element {
  const [newTodoValue, setNewTodoValue] = useState('')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    addTodo(newTodoValue)
    setIsOpenModal(false)
  }

  const onCancel = (): void => {
    setIsOpenModal(false)
  }

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setNewTodoValue(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder='Cortar cebolla para el almuerzo' value={newTodoValue} onChange={onChange} />
      <div className='TodoForm-buttonContainer'>
        <button type='button' className='TodoForm-button TodoForm-button--cancel' onClick={onCancel}>
          Cancelar
        </button>
        <button type='submit' className='TodoForm-button TodoForm-button--add'>
          Añadir
        </button>
      </div>
    </form>
  )
}
