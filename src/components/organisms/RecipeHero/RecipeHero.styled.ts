import styled from 'styled-components'
import { RecipeHeroProps } from '@organisms/RecipeHero/RecipeHero.types'

export const RecipeHeroWrapper = styled.section<Partial<RecipeHeroProps>>`
  align-self: self-start;
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth}px;
  margin: 0 auto;
  position: relative;

  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
    padding: 5px 16px 60px;
    margin-top: 20px;
  }

  @media ${({ theme }) => theme.media.maxWidth} {
    padding: 5px 0 60px;
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  button {
    z-index: 1;
  }
`

export const ImageWrapper = styled.div<Partial<RecipeHeroProps>>`
  display: flex;
  width: 100%;
  max-height: 580px;
  z-index: 0;

  &:hover {
    cursor: ${({ slug }) => (slug ? 'pointer' : 'unset')};
  }
  
  @media ${({ theme }) => theme.media.desktop} {
    width: 60%;
    position: relative;
    height: calc(90vh - 80px);
  }

  picture {
    width: 100%;
    margin: 0 auto;
    z-index: -1;

    @media ${({ theme }) => theme.media.desktop} {
      margin: 0 30px 40px 0;
      width: 90%;
    }

    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
      cursor: pointer;
      z-index: -1;

      @media ${({ theme }) => theme.media.desktop} {
        height: calc(90vh - 80px);
        max-height: 580px;
      }
    }
  }
}
`

export const FixedImage = styled.div<Partial<RecipeHeroProps>>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 100;
  background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8px );
-webkit-backdrop-filter: blur( 8px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
transition: 0.4s ease-in-out;
picture {
  position: relative;
}
    img {
      width: fit-content;
      height: 400px;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
      cursor: pointer;
      z-index: 10;
      margin: 0 auto;

      @media ${({ theme }) => theme.media.desktop} {
        height: calc(100vh - 80px);
        // max-height: 580px;
      }
    }
  }
}
`

export const DescriptionWrapper = styled.div<Partial<RecipeHeroProps>>`
  background-color: ${({ theme, isHomepage }) =>
    isHomepage ? `${theme.palette.lightPink}` : 'white'};
  align-self: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3% 8% 5%;
  z-index: 2;

  :hover {
    cursor: ${({ slug }) => (slug ? 'pointer' : 'unset')};
  }

  @media ${({ theme }) => theme.media.desktop} {
    margin: 30px auto 0 auto;
    transform: translate(0, 10px);
    padding: 5.5% 6%;
    justify-content: flex-start;
    position: absolute;
    right: 0;
    width: 50%;
    box-shadow: rgb(149 157 165 / 10%) 0 8px 24px;
  }

  h1 {
    font: 22px/28px ${({ theme }) => theme.fonts.primary};
    padding: 20px 0;

    @media ${({ theme }) => theme.media.desktop} {
      font: 32px/135% ${({ theme }) => theme.fonts.primary};
      padding: 0 0 20px;
    }
  }
`
