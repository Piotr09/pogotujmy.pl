import styled from 'styled-components'

export const StyledRecipeTag = styled.span`
  background: ${({ theme }) => theme.palette.lightgray};
  padding: 10px 15px;
  border-radius: 10px;
  margin: 10px 0;

  :not(:last-child) {
    margin-right: 15px;
  }
`

export const StyledTagsContainer = styled.section`
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  margin: 25px auto 50px auto;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  flex-direction: row;
`
