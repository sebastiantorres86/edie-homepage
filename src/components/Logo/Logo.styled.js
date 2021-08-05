import styled from 'styled-components'

export const Edie = styled.h1`
  margin: 0;
  font-family: Heebo;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 35px;
  color: ${({ theme }) => theme.gray1};

  @media only screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 53px;
  }
`

export const LogoWhite = styled(Edie)`
  color: #ffffff;
  font-size: 36px;
  line-height: 53px;
`
