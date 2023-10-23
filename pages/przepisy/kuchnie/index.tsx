import type { CategoryProps } from '@/types/category'
import { getCategories } from '@adapters/cockpit'
import { GetStaticPropsResult } from 'next'
import { ReactElement } from 'react'
import CategoryListingTemplate from '@templates/CategoryListingTemplate'

interface CategoryListingProps {
  categoryData: { entries: CategoryProps[] }
}

const Cuisines = ({ categoryData }: CategoryListingProps): ReactElement => {
  const categoryTitle = 'Kuchnie'

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
  const categoryData = await getCategories('1585')

  return {
    props: { categoryData },
  }
}

export default Cuisines
