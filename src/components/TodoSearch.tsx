import { useContext } from 'react'
import { TodoContext } from '../context/index'

import '../styles/components/TodoSearch.css'

export function TodoSearch (): JSX.Element {
  const { searchValue, setSearchValue: updateSearchValue } = useContext(TodoContext)
  const onChangeInputSearch = (newSearchValue: string): void => {
    updateSearchValue(newSearchValue)
  }
  return (
    <input
      value={searchValue}
      onChange={(event) => {
        onChangeInputSearch(event.target.value)
      }}
      className='TodoSearch'
      placeholder='Buscar una tarea'
    />
  )
}
