import { ArticleProps } from '@/types/article'
import { RecipeHeroProps } from '@organisms/RecipeHero/RecipeHero.types'

export const mapSlider = (slide: ArticleProps): RecipeHeroProps => ({
  image: {
    path: slide?.node.featuredImage?.node.sourceUrl,
    altText: slide?.node.featuredImage?.node.altText,
  },
  title: slide.node.title,
  excerpt: slide.node.excerpt,
  slug: slide.node.slug,
})
