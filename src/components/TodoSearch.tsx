import { type UseTodoType } from '@/hooks'
import '../styles/components/TodoSearch.css'

interface TodoSearchProps {
  searchValue: UseTodoType['searchValue']
  updateSearchValue: UseTodoType['setSearchValue']
}

export function TodoSearch({ searchValue, updateSearchValue }: TodoSearchProps): JSX.Element {
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
