import { useState } from 'react'
import { type UseTodoType } from '.'

export interface useStorageListenerType {
  show: boolean
  toggleShow: () => void
}

export function useStorageListener (sincronice: UseTodoType['sincroniceTodos'] = () => {}): useStorageListenerType {
  const [storageChange, setStorageChange] = useState(false)

  window.addEventListener('storage', (change) => {
    if (change.key === 'TODOS_V1') {
      console.log('Hubo cambios en TODOS_V1')
      setStorageChange(true)
    }
  })

  const toggleShow = (): void => {
    sincronice()
    setStorageChange(false)
  }

  return {
    show: storageChange,
    toggleShow
  }
}
