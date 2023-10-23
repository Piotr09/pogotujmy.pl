import { ReactElement, useState, useEffect } from 'react'
import { IngredientProps } from './Ingredient.types'
import { Square } from '@styled-icons/bootstrap/Square'
import { CheckSquareFill } from '@styled-icons/bootstrap/CheckSquareFill'
import { StyledLi } from './Ingredient.styled'
import ReactHtmlParser from 'react-html-parser'

export const Ingredient = ({ ingredient }: IngredientProps): ReactElement => {
  const [clicked, setClicked] = useState<boolean>()
  // const [array, setArray] = useState<Array>[]
  const [foodList, setFoodList] = useState([])
  // const foodList = []

  const handleClick = (ingredient) => {
    setClicked(!clicked)
    // foodList.push(ingredient)
    // [...clickedArray,clicked]
    setFoodList((foodlist) => [...foodlist, ingredient])
  }

  // sessionStorage.setItem("shoppingList", ingredient.value);
  // sessionStorage.setItem("names", JSON.stringify(names));

  // const handleClick = (ingredient) => {

  //   // console.log(foodList)

  // };
  return (
    <>
      <StyledLi
        key={ingredient.innerHTML}
        onClick={() => handleClick(ingredient.innerHTML)}
        id={ingredient.innerHTML}
        clicked={clicked}
      >
        <div>{clicked ? <CheckSquareFill /> : <Square />} </div>
        <div>{ReactHtmlParser(`${ingredient.innerHTML}`)}</div>
      </StyledLi>
    </>
  )
}
