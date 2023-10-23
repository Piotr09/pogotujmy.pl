import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { AddToFavoritesButton } from '@atoms/AddToFavoritesButton/AddToFavoritesButton'
import { PeopleFill } from '@styled-icons/bootstrap/PeopleFill'
import { Time } from '@styled-icons/boxicons-regular/Time'
import { Podium } from '@styled-icons/ionicons-solid/Podium'

import {
  StyledRelatedCardDescription,
  StyledRelatedCardHeading,
  StyledRelatedCardWrapper,
  StyledMoreInfoWrapper,
  IconWrapper,
  StyledMoreInfo,
} from './RelatedCard.styled'
import Picture from '@atoms/Picture'
import { RelatedCardTypes } from './RelatedCard.types'
import useLocalStorage from 'react-use-localstorage'

export const RelatedCard = ({
  image,
  title,
  description,
  slug,
  isArticle,
  showFavorites,
  cookTime,
  portion,
  isAdditionalInfo = true,
}: RelatedCardTypes): ReactElement => {
  const articleSlug = isArticle ? 'artykuly/' : 'przepisy/'

  // const [favorites, setFavorites] = useState([])
  // const addFavorites = true
  // const array = favorites

  // const testing = (title) => {
  //   if (!favorites.includes(title)) {
  //     favorites.push(title)
  //   } else {
  //     const index = favorites.indexOf(title)
  //     if (index > -1) {
  //       favorites.splice(index, 1) // 2nd parameter means remove one item only
  //     }
  //   }
  // }

  // array = [2, 9]
  // console.log('title', favorites)

  // const testFunction = () => {
  //   favorites.push(title)
  // }
  //
  // console.log(favorites)
  //
  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(favorites))
  // }, [favorites])

  // const addToFavorites = () => console.log(title)

  // if (title === title) {
  //   array.splice(array.length, 1)
  //   addFavorites = false
  // }
  // if (addFavorites) {
  //   array.push(title)
  // }
  // setFavorites([...array])

  // following function handles the operation of adding fav recipes's id's

  // const addToFavorite = (title) => {
  //   if (!favorite.includes(title)) setFavorite(favorite.push(title))
  //   // sessionStorage.setItem('favorites', JSON.stringify(favorite))
  //   console.log(favorite)
  //   // setIsFavorites(!isFavorites)
  // }

  // const addToFavorites = (props: AddToFavoritesProps) => {
  //   const [favorites, setFavorites] = useState([])

  //   const array = favorites
  //   const addArray = true
  //   // array.map((item, key) => {
  //   //   if (item.title === props.title) {
  //   //     array.splice(key, 1)
  //   //     addArray = false
  //   //   }
  //   // })
  //   if (addArray) {
  //     favorites.push(props)
  //   }
  //   setFavorites([...array])
  //   localStorage.setItem("favoritesListNew2", JSON.stringify(favorites))

  //   console.log(array)
  //   // const storage = localStorage.getItem('favoritesListNew2')
  //   // if (storage == null) {
  //   //   localStorage.setItem(('favoritesListNew2' + (props.title)), JSON.stringify(props.title))
  //   // } else {
  //   //   localStorage.removeItem('favoritesListNew2' + (props.title))
  //   // }
  // }

  return (
    <StyledRelatedCardWrapper>
      {/*<TestButton onClick={testing(title)}>add to favorites</TestButton>*/}
      <IconWrapper>
        {showFavorites && (
          <AddToFavoritesButton
            url={`przepisy/${slug}`}
            title={title}
            slug={slug}
            featuredImage={image.sourceUrl}
          />
        )}
      </IconWrapper>
      <div onClick={() => (window.location.href = `/${articleSlug}${slug}`)}>
        <StyledMoreInfoWrapper>
          <Picture {...image}></Picture>
          {/* {isAdditionalInfo && (
            <StyledMoreInfo>
              <span>
                <Time size={16} />
                {cookTime}
              </span>
              <span>|</span>
              <span>
                <PeopleFill size={16} />
                {portion}
              </span>
              <span>
              <Podium size={20} />
              {advancedLevel}
            </span>
            </StyledMoreInfo>
          )} */}
        </StyledMoreInfoWrapper>
        <a href={`/${articleSlug}${slug}`}>
          <StyledRelatedCardHeading>{title}</StyledRelatedCardHeading>
          {description && (
            <StyledRelatedCardDescription>
              {description}
            </StyledRelatedCardDescription>
          )}
        </a>
      </div>
    </StyledRelatedCardWrapper>
  )
}
