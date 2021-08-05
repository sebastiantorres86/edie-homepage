import React from 'react'
import { Container, Copy, Image, Subtitle, Title, Title2 } from './Hero.styled'
import Form from '../Form'

const Hero = () => {
  return (
    <Container>
      <Subtitle>Unhappy with your website?</Subtitle>
      <Title>We create beautiful and fast web services</Title>
      <Image />
      <Title2>Story, emotion and purpose</Title2>
      <Copy>
        We help transform your ideas into real world applications that will
        outperform your toughest competition and help you achieve your strategic
        goals in short period of time.
      </Copy>
      <Form />
    </Container>
  )
}

export default Hero
