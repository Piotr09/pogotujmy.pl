import {
  getCollection,
  getPostsByCategoryName,
  getWordpressPosts,
} from '@adapters/cockpit'
import { GetStaticPropsResult } from 'next'
import React, { ReactElement } from 'react'
import { ArticleProps } from '@/types/article'
import Breadcrumbs from '@atoms/Breadcrumbs'
import SeoHead from '@atoms/SeoHead'
import RecipeListingTemplate from '@templates/RecipeListingTemplate'
import { mapRelatedCard } from '@helpers/mappers/relatedCard'
import { urls } from '@config/'
import Layout from '@/components/organisms/Layout/Layout'

interface NewestArticlesListingProps {
  articlesData: ArticleProps[]
}

const Recipes = ({
  articlesData,
}: NewestArticlesListingProps): ReactElement => {
  const categoryTitle = 'Przepisy'

  const mappedRelatedCards = articlesData.map((item) =>
    mapRelatedCard(item.node),
  )

  return (
    <>
      <Breadcrumbs
        lastItemValue={categoryTitle}
        pages={[{ label: 'Strona główna', url: '/' }]}
      />
      <SeoHead
        breadcrumbLabel={'Zobacz wszystkie artykuły'}
        sitemapLabel={'Zobacz wszystkie artykuły'}
        seoTitle={'Zobacz wszystkie przepisy'}
        seoDescription={
          'Zobacz wszystkie artykuły na blogu. Pyszne pomysły na obiady, ciasta, desery, dania sezonowe, mięsne i wegetariańskie.'
        }
        ogTitle={'Wszystkie artykuły'}
        ogDescription={
          'Zobacz wszystkie artykuły na blogu. Pyszne pomysły na obiady, ciasta, desery, dania sezonowe, mięsne i wegetariańskie.'
        }
      />
      <RecipeListingTemplate
        categoryName={'Wszystkie artykuły'}
        items={mappedRelatedCards}
        isArticle
      />
    </>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<NewestArticlesListingProps>
> {
  const articlesData = await getPostsByCategoryName('Artykuły')

  return {
    props: { articlesData },
  }
}

export default Recipes
