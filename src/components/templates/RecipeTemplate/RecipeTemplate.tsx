import { Container } from '@atoms/Container'
import { ReactElement } from 'react'
import HyvorTalk from 'hyvor-talk-react'
import ReactHtmlParser from 'react-html-parser'

import Tag from '@atoms/Tag'
import RecipeHero from '@organisms/RecipeHero'
import { StyledArticle } from '@atoms/Container/Container.styled'
import { ShareButtons } from '../../molecules/ShareButtons/ShareButtons'
import { StyledTagsContainer } from '@atoms/Tag/Tag.styled'
import { NewestRecipesContainer } from '@templates/HomepageTemplate/HomepageTemplate.styled'
import RelatedCard from '@molecules/RelatedCard'
import React from 'react'
import { RecipeTemplateProps } from '@templates/RecipeTemplate/RecipeTemplate.types'
import RecipeSection from '@organisms/RecipeSection'
import {
  StyledMain,
  StyleAside,
  ContentSection,
} from '@templates/RecipeTemplate/RecipeTemplate.styled'
import { About } from '@/components/molecules/About/About'
import { Ads } from '@/components/molecules/Ads/Ads'

export const RecipeTemplate = ({
  recipeHero,
  recipeId,
  newestArticles,
  recipeTags,
  recipeDescription,
  isArticle,
  slug,
  cookTime,
  excerpt,
  servingsNumber,
  prepTime,
  instructions,
  ingredients,
}: RecipeTemplateProps): ReactElement => {
  // let ingredients = []
  // let instructions

  return (
    <>
      <RecipeHero
        {...recipeHero}
        servingsNumber={servingsNumber}
        prepTime={prepTime}
        cookTime={cookTime}
        title={recipeHero.title}
        slug={slug}
        excerpt={excerpt}
        featuredImage={recipeHero.image.path}
      />
      <StyledMain>
        <StyledArticle>
          <ContentSection>
            {ReactHtmlParser(`${recipeDescription}`)}
          </ContentSection>
          {ingredients && instructions && (
            <RecipeSection
              key={`recipeSection-${instructions}`}
              ingredients={ingredients}
              instructions={instructions}
            />
          )}
          <ShareButtons />
          {recipeTags && (
            <StyledTagsContainer>
              {recipeTags.map((item) => (
                <Tag
                  key={item.node}
                  name={item.node.name}
                  slug={item.node.slug}
                  parentLink={'/tag'}
                />
              ))}
            </StyledTagsContainer>
          )}
        </StyledArticle>
        <StyleAside>
          <About />
          <Ads />
        </StyleAside>
      </StyledMain>
      <Container>
        <h2>🔥 Najnowsze przepisy: </h2>
        <NewestRecipesContainer>
          {newestArticles.map((item) => (
            <RelatedCard
              key={item.title}
              image={item.image}
              cookTime={item.cookTime}
              advancedLevel={item.advancedLevel}
              portion={item.portion}
              title={item.title}
              slug={item.slug}
              isArticle={isArticle}
            />
          ))}
        </NewestRecipesContainer>
        <HyvorTalk.Embed
          title={'Skomentuj wpis'}
          websiteId={5604}
          id={recipeId}
        />
      </Container>
    </>
  )
}
