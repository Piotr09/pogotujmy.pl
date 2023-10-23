import { ArticleProps } from '@/types/article'
import { RelatedCardTypes } from '@molecules/RelatedCard/RelatedCard.types'
import { CategoryProps } from '@/types/category'
import { RelatedArticleProps } from '@/types/homepage'

export const mapRelatedCard = (articles: ArticleProps): RelatedCardTypes => ({
  title: articles?.title,
  description: articles?.excerpt,
  image: {
    path: articles?.featuredImage?.node.sourceUrl,
    altText: articles?.featuredImage?.node.altText,
  },
  slug: articles?.slug,
  // cookTime: articles?.recipeHero[0]?.settings?.prepTime,
  // advancedLevel: articles?.recipeHero[0]?.settings?.difficultyLevel,
  // portion: articles?.recipeHero[0]?.settings?.servingsNumber,
})

export const mapSimpleRelatedCard = (articles: ArticleProps): RelatedCardTypes => ({
  title: articles?.title,
  image: {
    path: articles?.featuredImage?.path,
    sourceUrl: articles?.featuredImage,
  },
  slug: articles?.slug,
  // cookTime: articles?.recipeHero[0]?.settings?.prepTime,
  // advancedLevel: articles?.recipeHero[0]?.settings?.difficultyLevel,
  // portion: articles?.recipeHero[0]?.settings?.servingsNumber,
})

export const mapRelatedRecipesCard = (
  article: RelatedArticleProps,
  articles: ArticleProps,
): RelatedCardTypes => ({
  title: article?.title,
  description: article?.description,
  image: {
    path: article?.featuredImage?.node.sourceUrl,
    altText: article?.featuredImage?.node.altText,
  },
  slug: article?.slug,
  // cookTime: articles?.recipeHero[0]?.settings?.prepTime,
  // advancedLevel: articles?.recipeHero[0]?.settings?.difficultyLevel,
  // portion: articles?.recipeHero[0]?.settings?.servingsNumber,
})

export const mapCategoriesRelatedCard = (
  category: CategoryProps,
): RelatedCardTypes => ({
  title: category?.node.name,
  image: {
    path: category?.image?.path,
    altText: category?.image?.description,
  },
  slug: category?.node.slug,
})
