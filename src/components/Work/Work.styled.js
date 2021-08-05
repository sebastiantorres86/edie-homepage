import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 36px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    &:nth-child(odd) {
      margin-top: 176px;
    }
  }
`

export const Image = styled.img`
  width: 350.1px;
  height: 350.1px;
  border-radius: 24px;

  @media only screen and (min-width: 768px) {
    width: 545px;
    height: 545px;
    border-radius: 12px;
  }
`

export const Type = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  margin-top: 12.48px;
  color: ${({ theme }) => theme.gray3};

  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
  }
`

export const Title = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.gray1};
  
  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
`
