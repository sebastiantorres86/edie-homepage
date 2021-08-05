import styled from 'styled-components'

export const StyledMenu = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.black};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-200%)')};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    display: flex;
  }

  a {
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s linear;

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`
