import styled from 'styled-components'

export const StyledButton = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: red;
  display: flex;
  background-color: white;
  z-index: 10;
  background: ${({ theme }) => theme.palette.lightbeige};

  :hover {
    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }  
 
  svg {
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 0;
    transition: 0.2s ease-in-out;
    color: black;

    
  }
`
