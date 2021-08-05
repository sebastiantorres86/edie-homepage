import styled from 'styled-components'
import person1 from '../../assets/person1.png'
import person2 from '../../assets/person2.png'
import person3 from '../../assets/person3.png'

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
  width: 354.1px;
  @media only screen and (min-width: 768px) {
    width: 635.43px;
    margin-top: 0;
  }
`

export const Image1 = styled.image`
  width: 178.16px;
  height: 178.16px;
  background: url(${person3});
  background-size: cover;
  background-position: center;
  border-radius: 24px;

  @media only screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
  }
`

export const Image2 = styled.image`
  width: 144.76px;
  height: 144.76px;
  background: #c4c4c4;
  border-radius: 24px;
  background: url(${person1});
  background-size: cover;
  background-position: center;

  @media only screen and (min-width: 768px) {
    width: 260px;
    height: 260px;
  }
`

export const Image3 = styled.image`
  width: 162.25px;
  height: 167.03px;
  background: #c4c4c4;
  border-radius: 24px;
  background: url(${person2});
  background-size: cover;
  background-position: center;

  @media only screen and (min-width: 768px) {
    width: 291.43px;
    height: 300px;
  }
`

export const FlexItem = styled.div`
  width: 162.25px;
  height: 320.7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    width: 300px;
    height: 584px;
  }
`
