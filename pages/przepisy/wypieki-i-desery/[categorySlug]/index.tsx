import { Container } from '@atoms/Container'
import SeoHead from '@atoms/SeoHead'
import RecipeListingTemplate from '@templates/RecipeListingTemplate'
import {
  ALL_RECIPES,
  HOMEPAGE,
  DESSERTS,
} from '@atoms/Breadcrumbs/Breadcrumbs.const'
import Breadcrumbs from '@atoms/Breadcrumbs'
import type { ArticleProps } from '@/types/article'
import {
  getCategoriesByParent,
  getPostsByCategoryName,
} from '@adapters/cockpit'
import { mapRelatedCard } from '@helpers/mappers/relatedCard'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import { ReactElement } from 'react'

interface CategoryListingProps {
  recipesData: { entries: ArticleProps[] }
  categoryName: string
  categorySlug: string
  singleCategoryData: { entries: ArticleProps[] }
}

const Desserts = ({
  recipesData,
  categoryName,
  categorySlug,
  singleCategoryData,
}: CategoryListingProps): ReactElement => {
  const mappedRelatedCards = recipesData.map((item) =>
    mapRelatedCard(item.node),
  )

  const subcategories = singleCategoryData.children.edges.map(
    (category) => category.node,
  )

  return (
    <>
      <Breadcrumbs
        lastItemValue={categoryName}
        pages={[HOMEPAGE, ALL_RECIPES, DESSERTS]}
      />
      <SeoHead
        breadcrumbLabel={`Najlepsze przepisy na dania z kategorii ${categoryName}`}
        sitemapLabel={`Najlepsze przepisy na dania z z kategorii ${categoryName}`}
        seoTitle={`Najlepsze przepisy na dania z kategorii ${categoryName}`}
        seoDescription={`Zobacz zbiór najlepszych przepisów na dania z kategorii ${categoryName}. Zobacz moje propozycje i zainspiruj się! Pyszne pomysły na dania mięsne i wegetariańskie.`}
        ogTitle={`Najlepsze przepisy na dania z kategorii ${categoryName}`}
        ogDescription={`Zobacz zbiór najlepszych przepisów na dania z kategorii ${categoryName}. Zobacz moje propozycje i zainspiruj się! Pyszne pomysły na dania mięsne i wegetariańskie.`}
      ></SeoHead>
      <Container>
        <RecipeListingTemplate
          categoryName={categoryName}
          items={mappedRelatedCards}
          subcategories={subcategories}
          categorySlug={categorySlug}
          categoryParentPage="wypieki-i-desery"
        />
      </Container>
    </>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const categoryData = await getCategoriesByParent('wypieki-i-desery')

  const paths = categoryData.children.edges.map((category) => {
    return {
      params: {
        categorySlug: category.node.slug,
      },
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps(context: {
  params: { categorySlug: string }
}): Promise<GetStaticPropsResult<CategoryListingProps>> {
  const {
    params: { categorySlug },
  } = context

  const singleCategoryData = await getCategoriesByParent(categorySlug)
  const recipesData = await getPostsByCategoryName(singleCategoryData.name)
  const categoryName = singleCategoryData.name

  return {
    props: { recipesData, categoryName, categorySlug, singleCategoryData },
  }
}

export default Desserts
