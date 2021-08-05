import styled from 'styled-components'

export const Container = styled.div`
  background: #100e1d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 24px;

  @media only screen and (min-width: 768px) {
    height: 385px;
  }
`

export const FlexContainer = styled.footer`
  background: #100e1d;
  color: #ffffff;
  padding: 36px 42px 0 44px;
  margin-bottom: 154px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    height: 180px;
    padding: 46px 137px 0 168px;
    margin-bottom: 118px;
    flex-direction: row;
  }
`

export const Section1 = styled.section`
  width: 92px;
  height: 180px;
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`

export const Section2 = styled.section`
  width: 92px;
  /* height: 180px; */
  display: flex;
  flex-direction: column;
  margin-bottom: 54px;

  @media only screen and (min-width: 768px) {
    margin-right: 100px;
  }
`

export const Links = styled.a`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 200%;
  /* or 36px */

  color: #ffffff;
  text-decoration: none;
`

export const SocialLinks = styled.div`
  height: 24px;
  display: flex;
  align-content: center;
  justify-content: center;
`
