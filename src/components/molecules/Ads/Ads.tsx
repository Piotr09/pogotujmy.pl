import React, { ReactElement } from 'react'
import { AdsWrapper } from './Ads.styled'
import LinkButton from '@/components/atoms/LinkButton'
import { VARIANTS } from '@/components/atoms/LinkButton/LinkButton.types'

export const Ads = (): ReactElement => (
  <a target="_blank" href="https://pogotujmy.pl/allegro/150-24">
    <AdsWrapper>
      <LinkButton
        url={'https://pogotujmy.pl/allegro/150-24'}
        openInNewTab
        label={'Sprawdz!'}
        variant={VARIANTS.PRIMARY}
      />
    </AdsWrapper>
  </a>
)
