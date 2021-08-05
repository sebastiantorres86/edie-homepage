import React from 'react'
import { Container, Image, Title, Type } from './Work.styled'

const Work = ({ item }) => {
  return (
    <Container>
      <Image src={item.image} />
      <Type>{item.type}</Type>
      <Title>{item.title}</Title>
    </Container>
  )
}

export default Work
