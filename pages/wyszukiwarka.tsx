import { GetStaticPropsResult } from 'next'
import { getWordpressPosts } from '../src/adapters/cockpit'
import { useEffect, useRef, useState } from 'react'
import RelatedCard from '@/components/molecules/RelatedCard'
import {
  StyledListing,
  StyledInputWrapper,
} from '@templates/SearchTemplate/SearchTemplate.styled'
import { mapRelatedCard } from '@/helpers/mappers/relatedCard'

export default function Home({ recipesData }) {
  const [value, setValue] = useState('')
  const inputTxt = useRef(null)
  const articles = value.length < 4 ? recipesData.slice(0, 12) : recipesData

  useEffect(() => {
    inputTxt.current.focus()
  })
  return (
    <>
      <div>
        <StyledInputWrapper>
          <h3>Znajdź przepis dla siebie</h3>
          <input
            type="text"
            placeholder={'Zacznij wpisywać wyszukiwaną frazę...'}
            value={value}
            ref={inputTxt}
            onChange={(e) => setValue(e.target.value)}
          />
        </StyledInputWrapper>
        <StyledListing>
          {articles
            .filter((item) => {
              if (!value) return true
              if (item.node.title.toLowerCase().includes(value.toLowerCase())) {
                return true
              }
            })
            .map((item) => (
              <RelatedCard {...mapRelatedCard(item.node)} />
            ))}
        </StyledListing>
      </div>
    </>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult> {
  const recipesData = await getWordpressPosts()

  return {
    props: { recipesData },
  }
}
