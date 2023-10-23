import React, { ReactElement } from 'react'

import { StyledCloseButton, StyledCloseIcon } from './CloseButton.styled'
import { CloseButtonTypes } from './CloseButton.types'

export const CloseButton = ({
  className,
  onClick,
  size,
  ariaLabel,
}: CloseButtonTypes): ReactElement => (
  <StyledCloseButton
    className={className}
    onClick={onClick}
    aria-label={ariaLabel}
  >
    <StyledCloseIcon size={size} />
  </StyledCloseButton>
)
