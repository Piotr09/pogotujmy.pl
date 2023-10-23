import { Container } from '@atoms/Container'
import SeoHead from '@atoms/SeoHead'
import RecipeListingTemplate from '@templates/RecipeListingTemplate'
import {
  ALL_RECIPES,
  DISHES,
  HOMEPAGE,
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
}

const Dishes = ({
  recipesData,
  categoryName,
}: CategoryListingProps): ReactElement => {
  const mappedRelatedCards = recipesData.map((item) =>
    mapRelatedCard(item.node),
  )

  return (
    <>
      <Breadcrumbs
        lastItemValue={categoryName}
        pages={[HOMEPAGE, ALL_RECIPES, DISHES]}
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
        />
      </Container>
    </>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const categoryData = await getCategoriesByParent('posilki')

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
    props: { recipesData, categoryName },
  }
}

export default Dishes
