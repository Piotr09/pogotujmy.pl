import SeoHead from '@atoms/SeoHead'
import React, { ReactElement, useEffect, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'

import Head from 'next/head'
import Breadcrumbs from '@atoms/Breadcrumbs'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import {
  getCollection,
  getWordpressPosts,
  getSinglePost,
} from '@adapters/cockpit'
import { ArticleProps } from '@/types/article'
import { RecipeTemplate } from '@templates/RecipeTemplate/RecipeTemplate'
import { mapRelatedCard } from '@helpers/mappers/relatedCard'
import { mapRecipeHero } from '@helpers/mappers/recipeHero'
import { mapSeoHead } from '@helpers/mappers/seoHead'

interface SingleRecipeProps {
  recipeData: { entries: ArticleProps[] }
  newestRecipes: { entries: ArticleProps[] }
  slug: string
}

const singleRecipe = ({
  recipeData,
  newestRecipes,
  slug,
}: SingleRecipeProps): ReactElement => {
  const recipe = recipeData

  // const schemaIngredients = recipe.content
  //   .filter((item) => item.component === 'recipeSection')
  //   .map((test) =>
  //     test.settings.ingredients.map((secondTest) => secondTest.value),
  //   )

  let [ingredients, setIngredients] = useState([])
  let [instructions, setInstructions] = useState([])
  let [intro, setIntro] = useState([])
  let [servingsNumber, setServingsNumber] = useState([])
  let [prepTime, setPrepTime] = useState(Number)
  let [cookTime, setCookTime] = useState(Number)
  let [fullTime, setFullTime] = useState(Number)

  useEffect(() => {
    ingredients = [...document.querySelectorAll('.wprm-recipe-ingredient')]
    setIngredients(ingredients)
    instructions = [
      ...document.querySelectorAll('.wprm-recipe-instruction-text'),
    ]
    setInstructions(instructions)
    intro = [...document.querySelectorAll('.has-text-align-left')]
    setIntro(intro)

    servingsNumber = document.querySelector('.wprm-recipe-servings-with-unit')
    setServingsNumber(servingsNumber)

    prepTime = document.querySelector('.wprm-recipe-prep_time-minutes')
    setPrepTime(prepTime)

    cookTime = document.querySelector('.wprm-recipe-cook_time-minutes')
    setCookTime(cookTime)

    fullTime = prepTime + cookTime
  }, [])

  const schemaIngredients = ingredients.map((prep) => prep.innerText)

  const schemaPrep = instructions.map(
    (prep) => `{"@type": "HowToStep", "name":"${prep.innerHTML}"},`,
  )

  const recipeHero = mapRecipeHero(recipe)
  // const recipeSchema = recipe.schema[0].settings
  // const metaData = recipe.metaData[0].settings

  const articleStructuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Recipe',
    name: recipeHero.title,
    image: [`${recipeHero.image.path}`],
    author: {
      '@type': 'Organization',
      name: 'Pogotujmy.pl',
    },
    description: recipeHero.excerpt,
    prepTime: `PT${prepTime}M`,
    // cookTime: `PT${recipeSchema.schemaCookTime}M`,
    // totalTime: `PT${recipeSchema.schemaTotalTime}M`,
    // keywords: `${recipeSchema.schemaKeywords}`,
    // recipeYield: `${recipeSchema.schemaRecipeYield}`,
    recipeIngredient: schemaIngredients,
    recipeInstructions: schemaPrep,
  }

  const relatedReciepies = newestRecipes

  const mappedRelatedCards = relatedReciepies.map((item) =>
    mapRelatedCard(item.node),
  )

  const seoHead = ReactHtmlParser(`${recipe.seo.fullHead}`)

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData).replace(/\\'`/g, '')}
        </script>
        {seoHead}
      </Head>
      {/* <SeoHead
        breadcrumbLabel={`Przepis na: ${recipeHero.title}}`}
        sitemapLabel={'Wszystkie najnowsze przepisy'}
        seoTitle={`Przepis na: ${recipeHero.title}`}
        seoDescription={
          'Zobacz wszystkie najnowsze przepisy na blogu. Pyszne pomysły na obiady, ciasta, desery, dania sezonowe, mięsne i wegetariańskie.'
        }
        ogTitle={'Wszystkie najnowsze przepisy'}
        ogDescription={
          'Zobacz wszystkie najnowsze przepisy na blogu. Pyszne pomysły na obiady, ciasta, desery, dania sezonowe, mięsne i wegetariańskie.'
        }
      /> */}
      <Breadcrumbs
        lastItemValue={recipeHero.title}
        pages={[
          { label: 'strona główna', url: '/' },
          { label: 'przepisy', url: '/przepisy' },
        ]}
      />
      {/* <SeoHead {...mapSeoHead(metaData)} /> */}
      {console.log('excerpt', recipeHero.excerpt)}
      <RecipeTemplate
        recipeHero={recipeHero}
        recipeTags={recipe.tags.edges}
        recipeDescription={recipe.content.replace(/(\[.*?\])/g, '')}
        newestArticles={mappedRelatedCards}
        intro={intro}
        cookTime={cookTime}
        excerpt={recipe.seo.metaDesc}
        servingsNumber={servingsNumber}
        instructions={instructions}
        ingredients={ingredients}
        prepTime={prepTime}
        title={recipeHero.title}
        slug={slug}
        featuredImage={recipeHero.image.path}
      />
    </>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const recipe = await getWordpressPosts()
  // const recipeData = await recipeResponse.json()

  const paths = recipe.map((recipe) => {
    return {
      params: {
        slug: recipe.node.slug,
      },
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps(context: {
  params: { slug: string }
}): Promise<GetStaticPropsResult<SingleRecipeProps>> {
  if (!context) return { notFound: true }
  const {
    params: { slug },
  } = context
  if (!slug) return { notFound: true }

  const recipeData = await getSinglePost(`"${slug}"`)

  const newestRecipesResponse = await getWordpressPosts(8)
  const now = new Date()
  const date30daysBefore = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 30,
  )

  const newestRecipes = newestRecipesResponse
    .filter(
      (item) =>
        !(
          new Date(item.node.date) < date30daysBefore &&
          item.node.categories.edges.some(
            (test) => test.node.name === 'Artykuły',
          )
        ),
    )
    .slice(0, 12)

  return {
    props: { recipeData, newestRecipes, slug },
  }
}

export default singleRecipe
