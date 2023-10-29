import 'swiper/swiper.min.css'
import {
  StyledHeader,
} from '@/components/templates/RecipeListingTemplate/RecipeListingTemplate.styled'
import {
  mapSimpleRelatedCard,
} from '@/helpers/mappers/relatedCard'
import RelatedCard from '@/components/molecules/RelatedCard'
import {
  StyledListing,
} from '@templates/SearchTemplate/SearchTemplate.styled'
import { useEffect, useState } from 'react'

export default function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const favoritesString =
      typeof window !== 'undefined' &&
      JSON.parse(localStorage.getItem('favoritesListNew2'))
    setFavorites(favoritesString)
  }, [])

  return (
    <>
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
