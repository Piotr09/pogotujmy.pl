import ShareButtonItem from '@atoms/ShareButtonItem'
import { shareButtonItemList } from '@atoms/ShareButtonItem/ShareButtonItem.const'
import {
  ShareWrapper,
  StyledShareButtons,
  StyledShareButtonsWrapper,
} from '@molecules/ShareButtons/ShareButtons.styled'
import type { ReactElement } from 'react'
import { ShareIconProps } from '@molecules/ShareButtons/ShareButtons.types'

export const ShareButtons = ({ ref }: ShareIconProps): ReactElement => {
  return (
    <StyledShareButtonsWrapper ref={ref}>
      <ShareWrapper>
        <StyledShareButtons>
          <span>Podziel się przepisem:</span>
          {shareButtonItemList.map((item) => (
            <ShareButtonItem key={item.shareUrl} {...item} />
          ))}
        </StyledShareButtons>
      </ShareWrapper>
    </StyledShareButtonsWrapper>
  )
}
