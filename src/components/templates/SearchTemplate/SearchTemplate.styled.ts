import styled from 'styled-components'

export const StyledListing = styled.div`
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  grid-gap: 20px;
  padding: 0 16px;
  max-width: 1200px;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
    padding: 0;
  }
`

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  padding: 2rem;
  border-radius: 0.5rem;
  margin: 2rem auto 3rem;
  text-align: center;
  h3 {
    font-size: 1.75rem;
    font-weight: normal;
    margin-bottom: 2rem;
  }
  input {
    border: unset;
    height: 3rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`
