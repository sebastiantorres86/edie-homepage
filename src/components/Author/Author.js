import React from 'react'
import { Copyright, Name } from './Author.styled'

const Author = () => {
  return (
    <Copyright>
      created by{' '}
      <Name
        href='https://www.linkedin.com/in/sebastian-torres-dev/'
        target='_blank'
      >
        Sebastian Torres
      </Name>{' '}
      - devChallenges.io
    </Copyright>
  )
}

export default Author
