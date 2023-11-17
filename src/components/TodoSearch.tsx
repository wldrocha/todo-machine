import { useContext } from 'react'

import '../styles/components/TodoSearch.css'

export function TodoSearch ({searchValue, updateSearchValue}): JSX.Element {
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
