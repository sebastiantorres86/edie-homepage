import React from 'react'
import Work from '../Work/Work'
import {
  ButtonContainer,
  Container,
  FlexContainer,
  SeeMore,
  Title
} from './OurWorks.styled'
import smarthome from '../../assets/smarthome.jpg'
import onboard from '../../assets/onboard.png'
import booking from '../../assets/booking.png'
import juiceProduct from '../../assets/juice-product.png'
import { ReactComponent as Arrow } from '../../assets/arrow_right_alt_black_24dp.svg'

const OurWorks = () => {
  const content = [
    {
      image: smarthome,
      type: 'Full stack application',
      title: 'Smart home dashboard'
    },
    {
      image: onboard,
      type: 'UX/UI design',
      title: 'Onboard application'
    },
    {
      image: booking,
      type: 'Mobile application',
      title: 'Booking system'
    },
    {
      image: juiceProduct,
      type: 'Front End application',
      title: 'Juice product homepage'
    }
  ]

  return (
    <Container id="works">
      <Title>Good design means good business</Title>
      <FlexContainer>
        {content.map(item => (
          <Work item={item} />
        ))}
      </FlexContainer>
      <ButtonContainer>
        <SeeMore>
          See more <Arrow fill='#2D9CDB' style={{ marginLeft: '10px' }} />
        </SeeMore>
      </ButtonContainer>
    </Container>
  )
}

export default OurWorks
