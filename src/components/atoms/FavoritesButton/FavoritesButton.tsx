import { ReactElement } from 'react'
import { StyledButton } from '@atoms/FavoritesButton/FavoritesButton.styled'
import { Heart as OutlineHeart } from '@styled-icons/fa-regular/Heart'

export const FavoritesButton = (): ReactElement => {
  return (
    <>
      <StyledButton href="/ulubione">
        <OutlineHeart />
      </StyledButton>
    </>
  )
}
