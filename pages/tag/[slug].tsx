import React, { ReactElement, useEffect, useState } from 'react'
import Head from 'next/head'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import {
  getWordpressPosts,
  getSinglePost,
  getPostsByCategoryName,
  getTags,
  getPostsByTag,
  getTagBySlug,
} from '@adapters/cockpit'
import { ArticleProps } from '@/types/article'
import { RecipeTemplate } from '@templates/RecipeTemplate/RecipeTemplate'
import { mapRelatedCard } from '@helpers/mappers/relatedCard'
import { mapRecipeHero } from '@helpers/mappers/recipeHero'
import { mapSeoHead } from '@/helpers/mappers/seoHead'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import SeoHead from '@/components/atoms/SeoHead'
import RecipeListingTemplate from '@/components/templates/RecipeListingTemplate'
import { RelatedCardTypes } from '@/components/molecules/RelatedCard/RelatedCard.types'

interface SingleRecipeProps {
  recipesByTag: { entries: RelatedCardTypes[] }
  tagName: string
}

const tagsListing = ({
  recipesByTag,
  tagName,
}: SingleRecipeProps): ReactElement => {
  const mappedRelatedCards = recipesByTag.map((item) =>
    mapRelatedCard(item.node),
  )

  return (
    <>
      <Breadcrumbs
        lastItemValue={tagName}
        pages={[
          { label: 'strona główna', url: '/' },
          { label: 'tag', url: '' },
        ]}
      />
      {/* <SeoHead {...mapSeoHead(metaData)} /> */}
      <RecipeListingTemplate
        categoryName={`Przepisy z tagu "${tagName}"`}
        items={mappedRelatedCards}
        // subcategories={subcategories}
        categorySlug={'tag'}
        categoryParentPage="wypieki-i-desery"
      />
    </>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const tags = await getTags()

  const paths = tags.map((tag) => {
    return {
      params: {
        slug: tag.node.slug,
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

  const recipesByTag = await getPostsByTag(slug)
  const tagNameResponse = await getTagBySlug(slug)
  const tagName = tagNameResponse.tag.name

  return {
    props: { recipesByTag, tagName },
  }
}

export default tagsListing
