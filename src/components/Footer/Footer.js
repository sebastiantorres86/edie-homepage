import React from 'react'
import { LogoWhite } from '../Logo/Logo.styled'
import {
  Container,
  FlexContainer,
  Section1,
  Links,
  Section2,
  SocialLinks
} from './Footer.styled'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg'
import { ReactComponent as Twitter } from '../../assets/twitter.svg'
import FormFooter from '../FormFooter'
import Author from '../Author'

const Footer = () => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Works', href: '#works' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <Container>
      <FlexContainer>
        <Section1>
          {links.map(item => (
            <Links href={item.href}>{item.name}</Links>
          ))}
        </Section1>
        <Section2>
          <LogoWhite>Edie</LogoWhite>
          <SocialLinks>
            <Links
              href='https://www.instagram.com/'
              style={{ marginRight: '11px' }}
              target='_blank'
            >
              <Instagram />
            </Links>
            <Links
              href='https://www.linkedin.com/'
              style={{ marginRight: '11px' }}
              target='_blank'
            >
              <LinkedIn />
            </Links>
            <Links href='https://twitter.com/' target='_blank'>
              <Twitter />
            </Links>
          </SocialLinks>
        </Section2>
        <FormFooter id='contact' />
      </FlexContainer>
      <Author />
    </Container>
  )
}

export default Footer
