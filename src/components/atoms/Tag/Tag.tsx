import React from 'react'

import { TagProps } from '@atoms/Tag/Tag.types'
import { StyledRecipeTag } from '@atoms/Tag/Tag.styled'

export const Tag = ({
  slug,
  name,
  parentLink,
}: TagProps): React.ReactElement => (
  <>
    {slug ? (
      <a href={`${parentLink}/${slug}`}>
        <StyledRecipeTag>{name}</StyledRecipeTag>
      </a>
    ) : (
      <StyledRecipeTag>{name}</StyledRecipeTag>
    )}
  </>
)
