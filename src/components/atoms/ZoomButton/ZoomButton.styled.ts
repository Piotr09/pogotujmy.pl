import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: black;
  display: flex;
  background-color: white;
  z-index: 10;

  svg {
    width: 1.2rem;
    height: 1.2rem;
    margin-top: 0;
    transition: 0.2s ease-in-out;
    
    :hover {
      width: 1.4rem;
      height: 1.4rem;
    }  
  }
`
