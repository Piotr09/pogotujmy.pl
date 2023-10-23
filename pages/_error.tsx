import { ReactElement } from 'react'

import { Error } from '@molecules/Error/Error'
import SeoHead from '@atoms/SeoHead'

const Custom404 = (): ReactElement => {
  return (
    <>
      <SeoHead seoTitle="404 - Nie znaleziono strony"></SeoHead>
      <Error />
    </>
  )
}

export default Custom404
