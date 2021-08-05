import styled from 'styled-components'
import imgMobile from '../../assets/heroImageMobile.jpg'
import img from '../../assets/heroImage.jpg'

export const Container = styled.section`
  padding: 31px 17px 102px 10px;

  @media only screen and (min-width: 768px) {
    padding: 31px 56px 102px 52px;
  }
`

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.blue};
  margin: 0;
  padding: 0 30px;

  @media only screen and (min-width: 768px) {
    padding: 0 225px;
    font-size: 18px;
    line-height: 27px;
  }
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  width: 272px;
  height: 72px;
  color: ${({ theme }) => theme.gray1};
  padding: 0;
  margin-left: 30px;

  @media only screen and (min-width: 768px) {
    width: 543px;
    height: 144px;
    padding: 0;
    margin-left: 225px;
    font-size: 48px;
    line-height: 72px;
    margin-top: 0.5rem;
  }
`

export const Title2 = styled(Title)`
  width: 227px;
  height: 58px;
  @media only screen and (min-width: 768px) {
    width: 366px;
    height: 141px;
    padding: 0;
    font-size: 48px;
    line-height: 72px;
    margin-top: 0.5rem;
  }
`

export const Image = styled.div`
  width: 348px;
  height: 145px;
  background: url(${imgMobile});
  background-size: cover;
  background-position: center;
  margin: 15px 0;
  border-radius: 18px;

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 354px;
    background: url(${img});
    background-size: cover;
    background-position: center;
    margin: 40px 0;
  }
`

export const Copy = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.gray2};
  margin: 28px 30px;
  padding: 0;
  width: 275px;
  height: 74px;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
    width: 366px;
    height: 137px;
    padding: 0;
    margin: 42px 0 42px 225px;
  }
`
