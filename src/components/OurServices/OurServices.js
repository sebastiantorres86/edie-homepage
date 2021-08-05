import React from 'react'
import Box from '../Box/Box'
import { Container, FlexContainer, Title } from './OurServices.styled'

const content = ['UI/UX Design', 'Front End', 'Back End']

const OurServices = () => {
  return (
    <Container id="services">
      <Title>We offer high demand services</Title>
      <FlexContainer>
        {content.map(item => (
          <Box content={item} id={item} />
        ))}
      </FlexContainer>
    </Container>
  )
}

export default OurServices
