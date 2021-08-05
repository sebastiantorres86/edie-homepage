import React from 'react'
import { Formulary, Input, Label, SubmitButton, Div } from './Form.styled'

const Form = () => {
  return (
    <Formulary id="contact">
      <Label>Want us to contact you?</Label>
      <Div>
        <Input placeholder='Email' />
        <SubmitButton>Join</SubmitButton>
      </Div>
    </Formulary>
  )
}

export default Form
