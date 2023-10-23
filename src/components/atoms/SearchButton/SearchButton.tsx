import { ReactElement } from 'react'
import { StyledButton } from '@atoms/SearchButton/SearchButton.styled'
import { Search as SearchIcon } from '@styled-icons/evaicons-solid/Search'

export const SearchButton = (): ReactElement => {
  return (
    <>
      <StyledButton href="/wyszukiwarka">
        <SearchIcon />
      </StyledButton>
    </>
  )
}
