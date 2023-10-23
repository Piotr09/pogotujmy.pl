import { PicutreTypes } from '@atoms/Picture/Picture.types'

export interface RelatedCardTypes {
  image: PicutreTypes
  title: string
  description?: string
  cookTime: string
  portion: string
  url?: string
  slug?: string
  isArticle: boolean
  isAdditionalInfo: boolean
}
