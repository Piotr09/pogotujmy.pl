import styled from 'styled-components'

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: sticky;
top: 20px;
align-items: center;
box-shadow: rgb(149 157 165 / 10%) 0 8px 24px;
border-radius: 10px;
padding: 30px;

h3 {
  padding: 1rem 0;
}

a {
  margin-top: 1rem;
}

`

export const AboutImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  // margin-top: -60px;
`
