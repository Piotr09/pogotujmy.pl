import styled from 'styled-components'

export const TestButton = styled.button`
  //position: absolute;
  //top: -30px;
  //margin-top: -30px;
`
export const IconWrapper = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 10;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`

export const StyledRelatedCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.primary};
  text-align: center;
  align-items: center;
  width: 100%;
  position: relative;

  :hover {
    cursor: pointer;

    img {
      transform: scale(1.05);
    }
  }

  a {
    background-color: white;
    display: flex;
    flex-direction: column;
    margin: -10px auto 0;
    border-radius: 10px;
    padding: 20px 10px 10px;
    box-shadow: rgba(149, 157, 165, 0.1) 0 8px 24px;

    h3 {
      font-size: 15px;
      text-align: center;
      margin: 0 auto;

      @media ${({ theme }) => theme.media.tablet} {
        font-size: 18px;
      }
    }

    :before {
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      position: absolute;
    }
  }

  > * {
    width: 100%;
  }

  picture {
    overflow: hidden;
    border-radius: 10px 10px 0 0;
    position: relative;
    display: block;

    ::before {
      content: '';
      padding-top: 100%;
      display: block;
    }
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    transform: scale(1);
    transition: all 0.2s linear;
  }
`

export const StyledRelatedCardHeading = styled.h3`
  width: fit-content;
  transition: all 0.3s linear;
  line-height: 25px;
  padding: 12px 0;
  font-weight: normal;
`

export const StyledRelatedCardDescription = styled.p`
  width: 90%;
  margin: 10px auto 15px auto;
  font-size: 15px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
export const StyledMoreInfo = styled.div`
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.yellow};
  opacity: 0.975;
  // color: ${({ theme }) => theme.palette.white};
  position: absolute;
  bottom: -200px;
  height: 2.5rem;
  width: 100%;
  transition: 0.2s ease-in-out;
  border-radius: 0 0 10px 10px;
  display: flex;
  padding: 0 1.5rem;

  span {
    display: flex;
    flex-direction: row;
    // white-space: nowrap;
    font-size: 12px;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`

export const StyledMoreInfoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 0;

  &:hover {
    > div {
      bottom: 0;
    }
  }
`
