import styled from 'styled-components'

export const AdsWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 300px;
  aspect-ratio: 1/1;
  background-image: url("https://www.pogotujmy.pl/wp-content/uploads/2023/06/2.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  a {
    margin-bottom: 1rem;
    background: ${({ theme }) => theme.palette.yellow};
  }
`