import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  width: 100%;
  h2 {
    padding: 0 16px;
    @media ${({ theme }) => theme.media.desktop} {
      padding: 0;
      margin: 0;
    }
  }
`

export const StyledArticle = styled.article`
  padding: 0 16px;
  line-height: 150%;

  @media ${({ theme }) => theme.media.desktop} {
    max-width: 70%;
    padding: 0;
  }

  // @media ${({ theme }) => theme.media.maxWidth} {
  //   margin: 0 auto;
  // }
`

export const StyledTextContainer = styled.section`
  padding: 30px 16px;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  margin: 0 auto;
  box-shadow: 5px 5px 33px 3px rgb(25 25 25 / 5%);
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.white};

  :not(:nth-child(0)) {
    padding: 30px;
    box-shadow: unset;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.palette.white};
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 30px 0;
    margin-bottom: 0;
  }
`
