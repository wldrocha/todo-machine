// useLocalStorage.test.ts
import { expect, it, describe, afterEach } from 'vitest'
import { renderHook, act, cleanup } from '@testing-library/react-hooks'
import { useLocalStorage } from '../../src/hooks'

describe('useLocalStorage', () => {
  const initValue = []
  const itemName = 'TODOS_V1'
  const temSaveValue = { title: 'test', completed: false, id: '3cbae6a1-16e3-46be-9cdf-71381b136a48' }
  const itemSaveArrayValue = [temSaveValue]

  afterEach(() => {
    cleanup()
  })
  it('should initialize with initialValue', () => {
    const { result } = renderHook(() => useLocalStorage(itemName, initValue))
    const { item } = result.current
    expect(item).toEqual(initValue)
  })

  // it('should update item when localStorage item is updated', () => {
  //   const updateValue = [itemValueToSave]
  //   const { result } = renderHook(() => useLocalStorage(itemName, initValue))
  //   const { item } = result.current

  //   localStorage.setItem(itemName, JSON.stringify(updateValue))
  //   act(() => {}) // Simulate rerender

  //   // expect(item).toEqual(updateValue)
  // })

  // it('should handle errors when parsing localStorage item', () => {
  //   const { result } = renderHook(() => useLocalStorage('itemName', 'initialValue'))
  //   const { error, getInfoOnLocalStorage } = result.current

  //   localStorage.setItem('itemName', 'invalidJSON')
  //   act(() => getInfoOnLocalStorage())

  //   expect(error.error).toBeTruthy()
  //   expect(error.message).toEqual('Ocurrió un error')
  // })

  // it('should save item to localStorage', () => {
  //   const { result } = renderHook(() => useLocalStorage(itemName, initValue))
  //   const { saveItem } = result.current

  //   saveItem(temSaveValue)
  //   expect(localStorage.getItem('itemName')).toEqual(JSON.stringify(itemSaveArrayValue))
  // })

  // it('should set loading to true when sincroniceItem is called', () => {
  //   const { result } = renderHook(() => useLocalStorage('itemName', 'initialValue'))
  //   const { sincroniceItem, loading } = result.current

  //   sinconiceItem()
  //   expect(loading).toBeTruthy()
  // })

  // it('should set loading to false when sincroniceItem is called and localStorage item is updated', () => {
  //   const { result } = renderHook(() => useLocalStorage('itemName', 'initialValue'))
  //   const { sincroniceItem, loading } = result.current

  //   sinconiceItem()
  //   act(() => {}) // Simulate rerender

  //   expect(loading).toBeFalsy()
  // })
})
