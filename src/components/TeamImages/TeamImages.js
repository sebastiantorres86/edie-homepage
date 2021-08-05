import React from 'react'
import {
  FlexContainer,
  FlexItem,
  Image1,
  Image2,
  Image3
} from './TeamImages.styled'

const TeamImages = () => {
  return (
    <FlexContainer>
      <Image1 />
      <FlexItem>
        <Image2 />
        <Image3 />
      </FlexItem>
    </FlexContainer>
  )
}

export default TeamImages
