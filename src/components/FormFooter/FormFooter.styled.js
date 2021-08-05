import styled from 'styled-components'

export const Label = styled.label`
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  padding: 0;
  color: ${({ theme }) => theme.gray3};

  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    padding: 0;
  }
`

export const Input = styled.input`
  width: 291px;
  height: 47px;
  background: #ffffff;
  border-radius: 12px;
  margin: 0;
  padding-left: 19px;
  border: none;
  position: relative;

  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: ${({ theme }) => theme.gray4};
  }

  @media only screen and (min-width: 768px) {
    width: 350px;
    height: 57px;
    margin: 9px 0;
  }
`

export const SubmitButton = styled.button`
  width: 71px;
  height: 39px;
  background: ${({ theme }) => theme.blue};
  border-radius: 12px;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.gray6};
  border: none;
  position: absolute;
  right: 62px;
  bottom: 13px;

  @media only screen and (min-width: 768px) {
    width: 94px;
    height: 49px;
    font-size: 18px;
    line-height: 27px;
    right: 4px;
    bottom: -5px;
  }
`

export const Formulary = styled.form`

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const Div = styled.div`
  width: 350px;
  height: 57px;
  position: relative;
  margin: 0;

  @media only screen and (min-width: 768px) {
    margin: 9px 0;
  }
`
