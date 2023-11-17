import { useState } from 'react'

export interface useStorageListenerType {
  show: boolean
  toggleShow: () => void
}

export function useStorageListener(sincronice = () => {}): useStorageListenerType {
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
