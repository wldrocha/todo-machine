// useLocalStorage.test.ts
import { expect, it, describe, vi, afterEach } from 'vitest'
import { renderHook, act, cleanup } from '@testing-library/react-hooks'
import { useLocalStorage } from '../../src/hooks'
import { Todo } from '../../src/types'

describe('useLocalStorage', () => {
  it('should initialize with initial value if no value is in local storage', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'initial'))
    expect(result.current.item).toEqual('initial')
  })

  it('should save a new item', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'initial'))
    act(() => {
      result.current.saveItem('newItem')
    })
    expect(result.current.item).toEqual('newItem')
  })

  // it('should synchronize item when storage event is fired', () => {
  //   const { result } = renderHook(() => useLocalStorage('test', 'initial'))

  //   act(() => {
  //     window.dispatchEvent(new StorageEvent('storage', { key: 'test' }))

  //     result.current.sincroniceItem()
  //   })
  //   console.log("🚀 ~ file: useLocalsstorage.test.ts:28 ~ act ~ result.current.:", result.current)
    
  // })

  it('should handle loading state', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'initial'))
    expect(result.current.loading).toEqual(true)
  })

  it('should handle error state', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'initial'))
    expect(result.current.error).toEqual({ error: false, message: '' })
  })
})
