import styled from 'styled-components'

export const RecipeInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0 20px 0;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media ${({ theme }) => theme.media.desktop} {
    padding: 5px 0 0 0;
    flex-wrap: nowrap;
  }
`

export const RecipeInfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 15px;
  align-items: center;
  // border: 2px solid black;
  margin-top: 20px;
  width: max-content;

  span {
    line-height: 0;
    text-align: center;
    display: block;
    padding: 0 5px 0 0;
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme }) => theme.palette.black};
  }
`

export const RecipeInfo = styled.div`
  width: 35px;
  line-height: 16px;
  color: white;
  display: inline-block;
  position: relative;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.palette.lightgray};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  svg {
    fill: black;
    color: black;
    display: block;
    width: 20px;
  }
`

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0.5rem 0 1rem;
  span {
    white-space: nowrap;
    :first-of-type {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 12px;
      margin-bottom: 0.25rem;
    }
  }
`
