import React from 'react'
import { Container, Title, Copy, Button } from './Box.styled'
import Edit from '../Edit'
import Code from '../Code_'
import Storage from '../Storage'

const Box = ({ content }) => {
  return (
    <Container>
      {content === 'UI/UX Design' ? (
        <Edit />
      ) : content === 'Front End' ? (
        <Code />
      ) : content === 'Back End' ? (
        <Storage />
      ) : null}
      <Title>{content}</Title>
      <Copy>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac
        nulla consequat aliquet id quis turpis.
      </Copy>
      <Button className='hover'>Get started</Button>
    </Container>
  )
}

export default Box
