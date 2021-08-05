import styled from 'styled-components'

export const Container = styled.section`
  padding: 0 17px 0 10px;

  @media only screen and (min-width: 768px) {
    padding: 31px 56px 102px 52px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0 113px;
  }
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.gray1};
  margin: 0 0 42px 39px;


  @media only screen and (min-width: 768px) {
    width: 346px;
    height: 108px;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    margin-left: 113px;
  }
`
