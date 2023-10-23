import type { CategoryProps } from '@/types/category'
import { getCategories } from '@adapters/cockpit'
import { GetStaticPropsResult } from 'next'
import { ReactElement } from 'react'
import CategoryListingTemplate from '@templates/CategoryListingTemplate'

interface CategoryListingProps {
  categoryData: { entries: CategoryProps[] }
}

const Dishes = ({ categoryData }: CategoryListingProps): ReactElement => {
  const categoryTitle = 'Posiłki'
  // const filteredSubCategories = categoryData.entries.filter(
  //   (item) => item.title !== categoryTitle,
  // )

  return (
    <CategoryListingTemplate
      categoryTitle={String(categoryTitle)}
      categoryData={categoryData}
    />
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<CategoryListingProps>
> {
  const categoryData = await getCategories('1501')

  return {
    props: { categoryData },
  }
}

export default Dishes
