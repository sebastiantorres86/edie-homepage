import styled from 'styled-components'

export const Container = styled.section`
  padding: 0 14.9px 0 10px;
  margin-top: 28px;
  margin-bottom: 100px;
  @media only screen and (min-width: 768px) {
    padding: 0 166.98px 0 165px;
    margin-bottom: 219.47px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Title = styled.h1`
  padding: 0;
  margin: 0 0 48px 35px;
  width: 267px;
  height: 72px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.gray1};

  @media only screen and (min-width: 768px) {
    width: 448px;
    height: 108px;
    font-size: 36px;
    line-height: 54px;
    margin: 0 0 12px 0;
  }
`

export const SeeMore = styled.button`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: ${({ theme }) => theme.blue};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-content: center;
  border: none;
  background: transparent;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`

export const ButtonContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    margin-top: -35px;
  }
`
