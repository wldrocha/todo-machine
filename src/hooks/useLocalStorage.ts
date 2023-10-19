import { useState } from 'react'

export function useLocalStorage<T> (
  itemName: string,
  initialValue: T
): [T, (newItem: T) => void] {
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem

  if (localStorageItem === null) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState<T>(parsedItem)

  const saveItem = (newItem: T): void => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}
