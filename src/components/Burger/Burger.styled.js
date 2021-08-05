import styled from 'styled-components'

export const StyledBurger = styled.button`
  position: absolute;
  top: 19px;
  right: 17px;
  flex-direction: column;
  justify-content: space-around;
  width: 18px;
  height: 16.5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 18px;
    height: 2px;
    background: ${({ theme, open }) => open ? theme.white : theme.gray1};
    /* border-radius: 1px; */
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
