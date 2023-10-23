import { RecipeHero } from '@/types/article'
import { RecipeHeroProps } from '@organisms/RecipeHero/RecipeHero.types'

export const mapRecipeHero = (recipeHero: RecipeHero): RecipeHeroProps => ({
  image: {
    path: recipeHero?.featuredImage?.node.sourceUrl,
    altText: recipeHero?.featuredImage?.node.altText,
  },
  title: recipeHero?.title,
  excerpt: recipeHero?.excerpt,
  // recipeInfo: {
  //   servingsNumber: recipeHero?.settings?.servingsNumber,
  //   prepTime: recipeHero?.settings?.prepTime,
  //   difficultyLevel: recipeHero?.settings?.difficultyLevel,
  // },
})
