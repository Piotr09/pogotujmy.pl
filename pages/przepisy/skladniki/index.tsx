import type { CategoryProps } from '@/types/category'
import { getCategories, getCategoriesByParent } from '@adapters/cockpit'
import { GetStaticPropsResult } from 'next'
import { ReactElement } from 'react'
import CategoryListingTemplate from '@templates/CategoryListingTemplate'

interface CategoryListingProps {
  categoryData: { entries: CategoryProps[] }
}

const Ingredients = ({ categoryData }: CategoryListingProps): ReactElement => {
  const categoryTitle = 'Składniki'

  return (
    <CategoryListingTemplate
      categoryTitle={categoryTitle}
      categoryData={categoryData}
    />
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<CategoryListingProps>
> {
  const categoryData = await getCategories('1521')

  return {
    props: { categoryData },
  }
}

export default Ingredients
