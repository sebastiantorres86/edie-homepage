import React from 'react'
import { Formulary, Input, Label, SubmitButton, Div } from './FormFooter.styled'

const FormFooter = () => {
  return (
    <Formulary>
      <Label>Want us to contact you?</Label>
      <Div>
        <Input placeholder='Email' />
        <SubmitButton>Join</SubmitButton>
      </Div>
    </Formulary>
  )
}

export default FormFooter
