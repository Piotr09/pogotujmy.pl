import styled from 'styled-components'

export const StyledPictureWrapper = styled.picture`
  display: block;
  position: relative;

  img {
    display: block;
    object-fit: cover;
    object-position: center;
  }
`
