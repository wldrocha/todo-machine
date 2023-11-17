import { useEffect, useState } from 'react'

export interface UseLocalStorageProp<T> {
  sincroniceItem: () => void
  item: T
  saveItem: (newItem: T) => void
  loading: boolean
  error: { error: boolean; message: string }
}

export function useLocalStorage<T>(itemName: string, initialValue: T): UseLocalStorageProp<T> {
  const [sincronicedItem, setSincronicedItem] = useState(true)
  const [item, setItem] = useState<T>(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({ error: false, message: '' })

  window.addEventListener('storage', (change) => {
    if (change.key === itemName) {
      setSincronicedItem(true)
    }
  })

  const getInfoOnLocalStorage = (): void => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem

        if (localStorageItem === null) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
      } catch (error) {
        setError({ error: true, message: 'Ocurrió un error' })
      }
      setSincronicedItem(true)
      setLoading(false)
    }, 3000)
  }

  useEffect(() => {
    getInfoOnLocalStorage()
  }, [sincronicedItem])

  const saveItem = (newItem: T): void => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
    setSincronicedItem(false)
  }

  const sincroniceItem = () => {
    setLoading(true)
    setSincronicedItem(false)
  }

  return {
    sincroniceItem,
    item,
    saveItem,
    loading,
    error
  }
}
