import React, { ReactElement } from 'react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import { HomepageTemplate } from '@templates/HomepageTemplate/HomepageTemplate'
import {
  getCollection,
  getSingleton,
  getSliderPosts,
  getFeaturedPosts,
  getWordpressPosts,
} from '@adapters/cockpit'
import { ArticleProps, MetaDataProps } from '@/types/article'
import { RelatedArticleProps, SingleHomepageProps } from '@/types/homepage'
import { mapRelatedRecipesCard } from '@helpers/mappers/relatedCard'
import { mapSlider } from '@helpers/mappers/slider'
import SeoHead from '@atoms/SeoHead'
import { urls } from '@config'

interface HomepageProps {
  homepagePosts: SingleHomepageProps
  articleData: { entries: ArticleProps[] }
  slider: ArticleProps[]
  relatedArticles: RelatedArticleProps[]
  seoHead: Omit<MetaDataProps, 'ogImage'>
}

SwiperCore.use([Navigation, Autoplay])

export const Homepage = (props: Partial<HomepageProps>): ReactElement => {
  const { relatedArticles, homepagePosts, seoHead, slider } = props

  const mappedNewestCards = homepagePosts.map((item) =>
    mapRelatedRecipesCard(item.node),
  )

  const mappedRelatedCards = relatedArticles
    .map((item) => mapRelatedRecipesCard(item.node))
    .slice(0, 3)

  const mappedSlider = slider.map((item) => mapSlider(item))

  return (
    <>
      {/* <SeoHead {...seoHead} /> */}
      <HomepageTemplate
        slider={mappedSlider}
        newestArticles={mappedNewestCards}
        relatedArticles={mappedRelatedCards}
      />
    </>
  )
}

export async function getStaticProps(): Promise<{ props: HomepageProps }> {
  const posts = await getWordpressPosts(18)

  const now = new Date()
  const date30daysBefore = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 30,
  )

  const homepagePosts = posts
    .filter(
      (item) =>
        !(
          new Date(item.node.date) < date30daysBefore &&
          item.node.categories.edges.some(
            (test) => test.node.name === 'Artykuły',
          )
        ),
    )
    .slice(0, 12)

  const slider = await getFeaturedPosts('wyróżnione')
  const relatedArticles = await getFeaturedPosts('featured')

  return {
    props: {
      homepagePosts,
      posts,
      relatedArticles,
      slider,
    },
  }
}

export default Homepage
