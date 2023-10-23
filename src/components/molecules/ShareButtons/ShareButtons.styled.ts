import styled from 'styled-components'

export const ShareWrapper = styled.div`
  padding: 0 16px;
  position: relative;
  margin-top: 2.5rem;

  @media ${({ theme }) => theme.breakpoints.large} {
    padding: 0;
  }
`

export const StyledShareButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  z-index: 1;
`

export const StyledShareButtons = styled.div`
  ${({ theme }) => theme.boxShadow};
  background-color: white;
  flex-direction: row;
  width: max-content;
  display: flex;
  align-items: center;
  background: unset;
  transition: 0.2s ease-in-out;
  svg {
    margin-top: unset;
  }
  span {
    margin-right: 0.75rem;
  }
`
