import { Close as CloseIcon } from '@styled-icons/ionicons-outline/Close'
import styled from 'styled-components'

export const StyledCloseIcon = styled(CloseIcon)`
  width: ${({ size }) => (size ? size : 28)}px;
  height: ${({ size }) => (size ? size : 28)}px;
`

export const StyledCloseButton = styled.button`
  color: ${({ theme }) => theme.palette.black};
  border: unset;
  transition: 0.3s;
  background: none;
  position: absolute;
  right: 2rem;
  top: 2rem;

  svg {
    margin-top: 0;
  }

  :hover {
    transform: rotate(-90deg);
  }
`
