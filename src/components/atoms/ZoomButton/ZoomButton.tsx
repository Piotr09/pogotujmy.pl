import { ReactElement } from 'react'
import { StyledButton } from './ZoomButton.styled'
import { MagnifyingGlass as ZoomIcon } from '@styled-icons/entypo/MagnifyingGlass'

export const ZoomButton = (): ReactElement => (
  <>
    <StyledButton aria-label="Powiększ">
      <ZoomIcon size={30} />
    </StyledButton>
  </>
)
