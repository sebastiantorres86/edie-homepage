import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 14.9px 0 10px;
  @media only screen and (min-width: 768px) {
    padding: 0 166.57px 0 170px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Subtitle = styled.h3`
  width: 280px;
  height: 27px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.red};

  @media only screen and (min-width: 768px) {
    width: 280px;
    height: 27px;
    font-size: 18px;
    line-height: 27px;
  }
`

export const Title = styled.h2`
  width: 280px;
  height: 162px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: ${({ theme }) => theme.gray1};
  margin-bottom: 14px;

  @media only screen and (min-width: 768px) {
    width: 280px;
    height: 162px;
    font-size: 36px;
    line-height: 54px;
  }
`

export const Copy = styled.p`
  width: 273px;
  height: 48px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.gray2};

  @media only screen and (min-width: 768px) {
    width: 273px;
    height: 48px;
    font-size: 16px;
    line-height: 24px;
  }
`
