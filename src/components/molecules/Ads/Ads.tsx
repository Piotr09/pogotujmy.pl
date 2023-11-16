import React, { ReactElement } from 'react'
import { AdsWrapper } from './Ads.styled'
import LinkButton from '@/components/atoms/LinkButton'
import { VARIANTS } from '@/components/atoms/LinkButton/LinkButton.types'

export const Ads = (): ReactElement => (
  <a target="_blank" href="https://allegro.pl/oferta/sloiczki-na-przyprawy-150ml-24szt-100-naklejek-12661945651">
    <AdsWrapper>
      <LinkButton
        url={'https://allegro.pl/oferta/sloiczki-na-przyprawy-150ml-24szt-100-naklejek-12661945651'}
        openInNewTab
        label={'Sprawdz!'}
        variant={VARIANTS.PRIMARY}
      />
    </AdsWrapper>
  </a>
)
