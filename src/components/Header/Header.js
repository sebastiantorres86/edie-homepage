import React from 'react'
import Logo from '../Logo'
import { Container, Menu, Links } from './Header.styled'

const Header = () => {
  return (
    <Container id="home">
      <Logo />
      <Menu>
        <Links href='#home'>Home</Links>
        <Links href='#services'>Services</Links>
        <Links href='#works'>Our Works</Links>
        <Links href='#clients'>Clients</Links>
        <Links href='#contact'>Contact</Links>
      </Menu>
    </Container>
  )
}

export default Header
