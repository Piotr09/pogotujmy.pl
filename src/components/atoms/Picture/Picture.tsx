import React, { ReactElement } from 'react'
import Image from 'next/image'
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
    <source srcSet={path ? path : 'https://www.pogotujmy.pl/wp-content/uploads/2023/10/placeholder-scaled.jpg'}/>
    <Image
      src={path ? path : 'https://www.pogotujmy.pl/wp-content/uploads/2023/10/placeholder-scaled.jpg'}
      alt={altText}
      loading="lazy"
      layout="fill"
      onClick={onClick}
    />
  </StyledPictureWrapper>
)
