import type { CategoryProps } from '@/types/category'
import { getCategories } from '@adapters/cockpit'
import { GetStaticPropsResult } from 'next'
import { ReactElement } from 'react'
import CategoryListingTemplate from '@templates/CategoryListingTemplate'

interface CategoryListingProps {
  categoryData: { entries: CategoryProps[] }
}

const Occasions = ({ categoryData }: CategoryListingProps): ReactElement => {
  const categoryTitle = 'Okazje'

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
  const categoryData = await getCategories('1505')

  return {
    props: { categoryData },
  }
}

export default Occasions
