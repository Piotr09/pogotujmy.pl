import React, { ReactElement } from 'react'

import { PeopleFill } from '@styled-icons/bootstrap/PeopleFill'
import { Time } from '@styled-icons/boxicons-regular/Time'
import { Podium } from '@styled-icons/ionicons-solid/Podium'
import { RecipeInfoProps } from '@molecules/RecipeInfo/RecipeInfo.types'
import { AboutWrapper, AboutImage } from './About.styled'
import LinkButton from '@/components/atoms/LinkButton'

export const About = (): ReactElement => (
  <AboutWrapper>
    <AboutImage src="https://secure.gravatar.com/avatar/a732ceb9f4fee2543f18f14e7cfba205?s=320&d=mm&r=g" />
    <h3>Piotr Pałasz</h3>
    <p>
      Cześć, tutaj Piotr, twórca Pogotujmy.pl. Mam nadzieje, że spodobała Ci się
      wizyta na moim blogu i jeszcze do mnie wpadniesz po nowe, kulinarne
      inspiracje :)
    </p>
    <LinkButton url={'/o-mnie'} label={'Poznajmy się!'} />
  </AboutWrapper>
)
