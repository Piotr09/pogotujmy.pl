import styled from 'styled-components'

interface SocialMediaSize {
  size: number
  label: string
}

export const SocialMedia = styled.div<SocialMediaSize>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px 0;
  padding: 0 20px;
  gap: 0.75rem;

  @media ${({ theme }) => theme.media.desktop} {
    width: ${({ label }) => (label ? '100%' : 'fit-content')};
    margin: 0;
    display: flex;
    max-width: 40rem;
    justify-content: center;
    margin: 0 auto;
}

    p {
      font-size: ${({ size }) => (size ? `${size / 2.25}px` : '100px')};
      margin-right: 25px;
    }
  }

  svg {
    width: ${({ size }) => (size ? `${size}px` : '100px')};
    fill: white;
    background-color: #cbbcb8;
    padding: ${({ size }) => (size ? `${size / 8}px` : '3px')};
    border-radius: 50%;
    border: 2px solid #cbbcb8;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  margin: 0.5rem auto 0;
  justify-content: center;
`