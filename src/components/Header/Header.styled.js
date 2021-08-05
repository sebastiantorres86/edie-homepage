import styled from 'styled-components'

export const Container = styled.div`
  padding: 17px 17px 13px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 768px) {
    padding: 42px 56px 65px 52px;
  }
`

export const Menu = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    width: 703px;
    height: 36px;
    display: flex;
    justify-content: space-between;
  }
`

export const Links = styled.a`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.gray1};
  text-decoration: none;
`
