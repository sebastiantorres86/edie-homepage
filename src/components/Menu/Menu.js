import React from 'react'
import { bool } from 'prop-types'
import { StyledMenu } from './Menu.styled'

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <a href='#home' onClick={() => setOpen(!open)}>
        Home
      </a>
      <a href='#services' onClick={() => setOpen(!open)}>
        Services
      </a>
      <a href='#works' onClick={() => setOpen(!open)}>
        Our Works
      </a>
      <a href='#clients' onClick={() => setOpen(!open)}>
        Clients
      </a>
      <a href='#contact' onClick={() => setOpen(!open)}>
        Contact
      </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired
}

export default Menu
