import 'swiper/swiper.min.css'
import { RecipeListingTemplate } from '@templates/RecipeListingTemplate/RecipeListingTemplate'
import { GetStaticPropsResult } from 'next'
import { getCollection } from '@adapters/cockpit'
import {
  StyledHeader,
  SubCategoriesWrapper,
} from '@/components/templates/RecipeListingTemplate/RecipeListingTemplate.styled'
import {
  mapRelatedCard,
  mapSimpleRelatedCard,
} from '@/helpers/mappers/relatedCard'
import RelatedCard from '@/components/molecules/RelatedCard'
import {
  StyledListing,
  StyledInputWrapper,
} from '@templates/SearchTemplate/SearchTemplate.styled'
import { useEffect, useMemo, useState } from 'react'

export default function Favorites() {
  // const [userData, setUserData] = useState()

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    // Load the favorites on mount
    const favoritesString =
      typeof window !== 'undefined' &&
      JSON.parse(localStorage.getItem('favoritesListNew2'))

    // if (favoritesString) {
    //   const favorites = JSON.parse(favoritesString)
    setFavorites(favoritesString)
    // }
    // Respond to the `storage` event
    // function storageEventHandler(event) {
    //   if (event.key === 'favoritesList') {
    //     const favorites = JSON.parse(event.newValue)
    //     setfavorites(favorites)
    //   }
    // }
  }, [favorites])

  return (
    <>
      {/* <ListingTemplate movies={favoriteItems} /> */}
      <StyledHeader>
        <h1>Twoje ulubione przepisy:</h1>
        {!favorites ? (
          <span>Brak ulubionych przepisów 😔</span>
        ) : (
          <span>Liczba ulubionych przepisów: {favorites.length}</span>
        )}
      </StyledHeader>
      <StyledListing>
        {favorites &&
          favorites.map((item) => (
            <RelatedCard
              key={item.slug}
              {...mapSimpleRelatedCard(item)}
              showFavorites
            />
          ))}
      </StyledListing>
    </>
  )
}
