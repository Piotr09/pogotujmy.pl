import { Container } from '@atoms/Container'
import type { ReactElement } from 'react'

import { ITEMS_PER_PAGE } from './RecipeListingTemplate.const'
import { useListing } from './RecipeListingTemplate.hook'
import {
  StyledHeader,
  SubCategoriesWrapper,
} from './RecipeListingTemplate.styled'
import type { RecipeListingTemplateProps } from './RecipeListingTemplate.types'
import Listing from '@molecules/Listing'

import Tag from '@atoms/Tag'

export const RecipeListingTemplate = ({
  categoryName,
  items,
  subcategories,
  categoryParentPage,
  categorySlug,
  isArticle,
}: RecipeListingTemplateProps): ReactElement => {
  const {
    filteredItems,
    changePage,
    currentPage,
    filteredItemsNumber,
  } = useListing(items, ITEMS_PER_PAGE)

  return (
    <>
      <Container>
        <StyledHeader>
          <h1>{categoryName}:</h1>
          {items.length < 1 ? (
            <span>Brak przepisow w tej kategorii</span>
          ) : (
            <span>Liczba przepisów w tej kategorii: {filteredItemsNumber}</span>
          )}
        </StyledHeader>
        <SubCategoriesWrapper>
          {subcategories &&
            subcategories.map((item) => (
              <Tag
                key={item.name}
                parentLink={`/przepisy/${categoryParentPage}/${categorySlug}`}
                name={item.name}
                slug={item.slug}
              />
            ))}
        </SubCategoriesWrapper>
      </Container>
      <Container>
        <Listing
          allItemsNumber={filteredItemsNumber}
          filteredItems={filteredItems}
          changePage={changePage}
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          isArticle={isArticle}
        />
      </Container>
    </>
  )
}
