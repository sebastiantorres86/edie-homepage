import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  Clients,
  Footer,
  Header,
  Hero,
  OurServices,
  OurWorks,
  Team,
  Burger,
  Menu
} from './components'
import { theme } from './theme'

function App () {
  const [open, setOpen] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <OurServices />
      <OurWorks />
      <Team />
      <Clients />
      <Footer />
      <div>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
