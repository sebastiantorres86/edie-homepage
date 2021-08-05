import styled from 'styled-components'

export const Container = styled.button`
  width: 341px;
  height: 422px;
  padding: 49px 34px 43px 34px;
  margin-bottom: 75px;
  background: #ffffff;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;

  &:hover,
  &:focus {
    box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);
    cursor: pointer;

    button {
      background: ${({ theme }) => theme.blue};
    }
  }

  @media only screen and (min-width: 768px) {
      margin-right: 40px;
  }
`

export const Button = styled.button`
  width: 116px;
  height: 42px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background: ${({ theme }) => theme.gray5};
  border-radius: 12px;
  border: none;
  cursor: pointer;
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.gray1};
`

export const Copy = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  text-align: left;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.gray2};
`
