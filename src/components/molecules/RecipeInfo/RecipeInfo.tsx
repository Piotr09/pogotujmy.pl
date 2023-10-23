import React, { ReactElement } from 'react'

import { People } from '@styled-icons/bootstrap/People'
import { Timer } from '@styled-icons/fluentui-system-regular/Timer'
import { Podium } from '@styled-icons/ionicons-outline/Podium'
import { RecipeInfoProps } from '@molecules/RecipeInfo/RecipeInfo.types'
import {
  RecipeInfo,
  RecipeInfoColumn,
  RecipeInfoWrapper,
  DetailsWrapper,
} from '@molecules/RecipeInfo/RecipeInfo.styled'

export const RecipeInfoComponent = ({
  servingsNumber,
  prepTime,
  cookTime,
  difficultyLevel,
}: RecipeInfoProps): ReactElement => (
  <RecipeInfoWrapper>
    {servingsNumber && (
      <RecipeInfoColumn>
        <RecipeInfo>
          <People />
        </RecipeInfo>
        <DetailsWrapper>
          <span>Ilość</span>
          <span>{servingsNumber.innerText}</span>
        </DetailsWrapper>
      </RecipeInfoColumn>
    )}
    {prepTime && (
      <RecipeInfoColumn>
        <RecipeInfo>
          <Timer />
        </RecipeInfo>
        <DetailsWrapper>
          <span>Przygotowanie</span>
          <span>{prepTime.innerText.slice(0, -4)}</span>
        </DetailsWrapper>
      </RecipeInfoColumn>
    )}
    {cookTime && (
      <RecipeInfoColumn>
        <RecipeInfo>
          <Timer />
        </RecipeInfo>
        <DetailsWrapper>
          <span>Gotowanie</span>
          <span>{cookTime.innerText}</span>
        </DetailsWrapper>
      </RecipeInfoColumn>
    )}
  </RecipeInfoWrapper>
)
