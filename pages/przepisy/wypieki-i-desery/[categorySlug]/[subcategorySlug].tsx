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
  getAllCategories,
} from '@adapters/cockpit'
import { mapRelatedCard } from '@helpers/mappers/relatedCard'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import { ReactElement } from 'react'

interface CategoryListingProps {
  recipesData: { entries: ArticleProps[] }
  categoryName: string
  categorySlug: string
  parentCategoryName: string
}

const DessertSubcatogory = ({
  recipesData,
  categoryName,
  categorySlug,
  parentCategoryName,
}: CategoryListingProps): ReactElement => {
  const mappedRelatedCards = recipesData.map((item) =>
    mapRelatedCard(item.node),
  )
  return (
    <>
      <Breadcrumbs
        lastItemValue={categoryName}
        pages={[
          HOMEPAGE,
          ALL_RECIPES,
          DESSERTS,
          {
            label: parentCategoryName,
            url: `${DESSERTS.url}/${categorySlug}`,
          },
        ]}
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
          categorySlug={categorySlug}
        />
      </Container>
    </>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const categoryData = await getAllCategories()

  const paths = categoryData.map((category) => {
    return {
      params: {
        subcategorySlug: category.node.slug,
        categorySlug: String(category.node?.parent?.node.slug),
      },
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps(context: {
  params: { subcategorySlug: string; categorySlug: string }
}): Promise<GetStaticPropsResult<CategoryListingProps>> {
  const {
    params: { subcategorySlug, categorySlug },
  } = context

  const singleCategoryData = await getCategoriesByParent(subcategorySlug)
  const parentCategoryData = await getCategoriesByParent(categorySlug)

  const recipesData = await getPostsByCategoryName(singleCategoryData.name)
  const categoryName = singleCategoryData.name
  const parentCategoryName = parentCategoryData && parentCategoryData.name

  return {
    props: { recipesData, categoryName, categorySlug, parentCategoryName },
  }
}

export default DessertSubcatogory
