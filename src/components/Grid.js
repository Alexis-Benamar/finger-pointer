import React from 'react'
import styled from 'styled-components'

import Emoji from './Emoji'

const emojiNumber = 99

const GridContainer = styled.div`
  max-width: calc(11 * 40px);
`

const Grid = () => {
  const grid = []

  for (let i = 0; i < emojiNumber; i++) {
    grid.push(<Emoji key={i} />)
  }

  return (
    <GridContainer>
      {grid}
    </GridContainer>
  )
}

export default Grid