import styled from 'styled-components'
import person4 from '../../assets/person4.png'

export const Container = styled.section`
  padding: 0 14px 0 10px;
  margin: 100px 0;

  @media only screen and (min-width: 768px) {
    padding: 0 338px 0 165px;
  }
`

export const Quote = styled.p`
  width: 351px;
  height: 180px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.gray1};
  margin-bottom: 31px;

  @media only screen and (min-width: 768px) {
    width: 937px;
    height: 162px;
    font-size: 36px;
    line-height: 54px;
    margin-bottom: 36px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 82px;

  @media only screen and (min-width: 768px) {
      width: 303px;
  }
`

export const Image4 = styled.img`
  width: 82px;
  height: 82px;
  background: url(${person4});
  background-size: cover;
  background-position: center;
  border-radius: 12px;

  @media only screen and (min-width: 768px) {
    width: 82px;
    height: 82px;
  }
`

export const FlexItem = styled.div`
  width: 191px;
  height: 82px;
  margin-right: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
      margin-right: 0;
  }
`

export const Name = styled.p`
  width: 140px;
  height: 36px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.gray1};
`

export const Company = styled.p`
  width: 191px;
  height: 27px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.gray3};
`
