import React from 'react'
import TeamImages from '../TeamImages'
import { Container, Copy, Subtitle, Title } from './Team.styled'

const Team = () => {
  return (
    <Container>
      <div>
        <Subtitle>Meet the team</Subtitle>
        <Title>We are chilled and a laidback team</Title>
        <Copy>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Copy>
      </div>
      <TeamImages />
    </Container>
  )
}

export default Team
