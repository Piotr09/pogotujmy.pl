import styled from 'styled-components'

export const StyledTextContainer = styled.section`
  padding: 30px 16px;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  margin: 0 auto;
  box-shadow: 5px 5px 33px 3px rgb(25 25 25 / 5%);
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.white};
  line-height: 150%;

  :not(:nth-child(0)) {
    padding: 30px 30px 30px 0;
    box-shadow: unset;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.palette.white};
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 30px 0;
    margin-bottom: 0;
  }
`

export const HiddenElement = styled.section`
  display: none;
`

export const StyledMain = styled.main`
  display: flex;
  max-width: 1172px;
  margin: 0 auto;
`
export const StyleAside = styled.main`
  width: 30%;
  display: none;
  flex-direction: column;
  gap: 1rem;
  @media ${({ theme }) => theme.media.tablet} {
    display: flex;
  }
`

export const ContentSection = styled.section`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 2rem 0;
    line-height: 130%;
  }
  padding-right: 3rem;
  ul,
  ol {
    margin: 2rem 2rem;
  }
  a {
    color: ${({ theme }) => theme.palette.yellow};
    text-decoration: underline;
  }
  img {
    margin: 2rem 0;
    border-radius: 0.75rem;
  }
  .wprm-recipe-container {
    display: none;
  }
  hr {
    margin: 2rem 0;
    border-color: ${({ theme }) => theme.palette.lightgray};
    border-top: unset;
    border-width: 1px;
  }

  .wprm-recipe-ingredient-name {
    p {
      font-weight: bold;
    }
  }
`
