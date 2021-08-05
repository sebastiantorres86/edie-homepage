import React from 'react'
import {
  Company,
  Container,
  FlexContainer,
  FlexItem,
  Image4,
  Name,
  Quote
} from './Clients_.styled'

const Clients = () => {
  return (
    <Container id="clients">
      <Quote>
        “Fast and outstanding results. Edie understands their customer’s needs.
        They have a young and talented team.”
      </Quote>
      <FlexContainer>
        <Image4 />
        <FlexItem>
          <Name>Carlos Tran</Name>
          <Company>The Decorate Gatsby</Company>
        </FlexItem>
      </FlexContainer>
    </Container>
  )
}

export default Clients
