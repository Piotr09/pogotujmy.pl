import React, { ReactElement } from 'react'

import { StyledPictureWrapper } from './Picture.styled'
import { PicutreTypes } from './Picture.types'

export const Picture = ({
  path,
  width,
  altText,
  children,
  onClick,
}: PicutreTypes): ReactElement => (
  <StyledPictureWrapper>
    {children}
    <source srcSet={path && `${path}?fm=webp` || 'https://www.pogotujmy.pl/wp-content/uploads/2023/10/placeholder-scaled.jpg'} type="image/webp" />
    <img
      src={path && `${path}?fm=webp${width ? `&w=${width}` : ''}` || 'https://www.pogotujmy.pl/wp-content/uploads/2023/10/placeholder-scaled.jpg'}
      alt={altText}
      loading="lazy"
      onClick={onClick}
    />
  </StyledPictureWrapper>
)
