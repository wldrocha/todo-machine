import { useEffect, useState } from 'react'

interface UseLocalStorageProp<T> {
  item: T
  saveItem: (newItem: T) => void
  loading: boolean
  error: { error: boolean, message: string }
}

export function useLocalStorage<T> (
  itemName: string,
  initialValue: T
): UseLocalStorageProp<T> {
  const [item, setItem] = useState<T>(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({ error: false, message: '' })

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
      setLoading(false)
    }, 3000)
  }

  useEffect(() => {
    getInfoOnLocalStorage()
  }, [])

  const saveItem = (newItem: T): void => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item, saveItem, loading, error
  }
}
