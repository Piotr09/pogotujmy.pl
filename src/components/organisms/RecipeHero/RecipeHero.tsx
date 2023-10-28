import Picture from '@atoms/Picture'
import { RecipeInfoComponent } from '@molecules/RecipeInfo/RecipeInfo'
import { ZoomButton } from '@atoms/ZoomButton/ZoomButton'

import {
  DescriptionWrapper,
  ImageWrapper,
  RecipeHeroWrapper,
  FixedImage,
  IconWrapper,
} from '@organisms/RecipeHero/RecipeHero.styled'
import type { RecipeHeroProps } from '@organisms/RecipeHero/RecipeHero.types'
import type { ReactElement } from 'react'
import React, { useState } from 'react'
import CloseButton from '@atoms/CloseButton'
import { AddToFavoritesButton } from '@atoms/AddToFavoritesButton/AddToFavoritesButton'
import ReactHtmlParser from 'react-html-parser'

export const RecipeHero = ({
  image,
  excerpt,
  recipeInfo,
  title,
  slug,
  servingsNumber,
  prepTime,
  isHomepage,
}: RecipeHeroProps): ReactElement => {
  const [zoom, setZoom] = useState(false)
  return (
    <RecipeHeroWrapper
      isHomepage={isHomepage}
      onClick={() => isHomepage && (window.location.href = `/przepisy/${slug}`)}
    >
      <ImageWrapper>
        <Picture {...image} onClick={() => setZoom(!zoom)} />
        <IconWrapper>
          {!isHomepage && <ZoomButton onClick={() => setZoom(!zoom)}/>}
          {!isHomepage && (
            <AddToFavoritesButton
              url={`przepisy/${slug}`}
              title={title}
              slug={slug}
              featuredImage={image}
            />
          )}
        </IconWrapper>
      </ImageWrapper>
      {zoom && (
        <FixedImage onClick={() => setZoom(!zoom)}>
          <Picture {...image} />
          <CloseButton
            onClick={() => setZoom(!zoom)}
            ariaLabel="Zamknij"
            size={60}
          />
        </FixedImage>
      )}
      <DescriptionWrapper isHomepage={isHomepage} slug={slug}>
        {isHomepage ? (
          <a href={`/przepisy/${slug}`}>
            <h1>{title}</h1>
            <p>{ReactHtmlParser(`${excerpt}`)}</p>
          </a>
        ) : (
          <>
            <h1>{title}</h1>
            {excerpt && ReactHtmlParser(`${excerpt}`)}
          </>
        )}
        {servingsNumber && (
          <RecipeInfoComponent
            {...recipeInfo}
            servingsNumber={servingsNumber}
            prepTime={prepTime}
          />
        )}
      </DescriptionWrapper>
    </RecipeHeroWrapper>
  )
}
