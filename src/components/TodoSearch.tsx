import '../styles/components/TodoSearch.css'
interface TodoSearchProps {
  searchValue: string
  updateSearchValue: (newSearchValue: string) => void
}

export function TodoSearch ({ searchValue, updateSearchValue }: TodoSearchProps): JSX.Element {
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
