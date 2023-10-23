import React, { ReactElement, useEffect, useState } from 'react'
import Head from 'next/head'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import {
  getWordpressPosts,
  getSinglePost,
  getPostsByCategoryName,
} from '@adapters/cockpit'
import { ArticleProps } from '@/types/article'
import { RecipeTemplate } from '@templates/RecipeTemplate/RecipeTemplate'
import { mapRelatedCard } from '@helpers/mappers/relatedCard'
import { mapRecipeHero } from '@helpers/mappers/recipeHero'
import { mapSeoHead } from '@/helpers/mappers/seoHead'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import SeoHead from '@/components/atoms/SeoHead'

interface SingleRecipeProps {
  articleData: { entries: ArticleProps[] }
  newestRecipes: { entries: ArticleProps[] }
}

const singleRecipe = ({
  articleData,
  newestArticles,
}: SingleRecipeProps): ReactElement => {
  const articleHero = mapRecipeHero(articleData)

  const articleStructuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Article',
    name: articleHero.title,
    image: [`${articleHero.image.path}`],
    author: {
      '@type': 'Organization',
      name: 'Pogotujmy.pl',
    },
    description: articleHero.excerpt,
  }

  const mappedRelatedCards = newestArticles.map((item) =>
    mapRelatedCard(item.node),
  )

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData).replace(/\\'`/g, '')}
        </script>
      </Head>
      <Breadcrumbs
        lastItemValue={articleHero.title}
        pages={[
          { label: 'strona główna', url: '/' },
          { label: 'porady', url: '/porady' },
        ]}
      />
      {/* <SeoHead {...mapSeoHead(metaData)} /> */}
      <RecipeTemplate
        recipeHero={articleHero}
        recipeTags={articleData.tags.edges}
        recipeDescription={articleData.content}
        newestArticles={mappedRelatedCards}
        isArticle
      />
    </>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const articles = await getPostsByCategoryName('Artykuły')

  const paths = articles.map((article) => {
    return {
      params: {
        slug: article.node.slug,
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

  const articleData = await getSinglePost(`"${slug}"`)
  const newestArticles = await getWordpressPosts(4)

  return {
    props: { articleData, newestArticles },
  }
}

export default singleRecipe
