import type { ReactElement } from 'react'

import {
  StyledIngredientSectionWrapper,
  StyledTitle,
  StyledUl,
} from './IngredientsSection.styled'
import type { IngredientsSectionProps } from './IngredientsSection.types'
import React, { useState, useRef, useEffect } from 'react'
import { Ingredient } from '@/components/atoms/Ingredient/Ingredient'

export const IngredientsSection = ({
  ingredients,
}: IngredientsSectionProps): ReactElement => {
  // const ingredientsS = []
  // const test = (ingredient) => {
  //   ingredientsS.push(ingredient.value)
  //   console.log(ingredients)
  // }

  return (
    <StyledIngredientSectionWrapper>
      <StyledTitle>Składniki:</StyledTitle>
      <StyledUl>
        {/* <div id="test"> */}
        <>
          {ingredients.map((ingredient) => (
            <Ingredient ingredient={ingredient} />
          ))}
        </>
        {/* </div> */}
      </StyledUl>
    </StyledIngredientSectionWrapper>
  )
}
