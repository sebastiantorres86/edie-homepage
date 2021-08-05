import styled from 'styled-components'

export const Label = styled.label`
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  padding: 0;
  margin-left: 30px;
  color: ${({ theme }) => theme.gray3};

  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    padding: 0 225px;
    margin-left: 0;
  }
`

export const Input = styled.input`
  width: 291px;
  height: 47px;
  background: ${({ theme }) => theme.gray6};
  border-radius: 12px;
  margin: 0 27px 0 30px;
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
    margin: 9px 225px;
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
  right: 39px;
  bottom: 13px;

  @media only screen and (min-width: 768px) {
    width: 94px;
    height: 49px;
    font-size: 18px;
    line-height: 27px;
    left: 476px;
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
