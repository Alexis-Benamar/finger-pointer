import React from 'react'
import styled from 'styled-components'

import NewEmoji from './NewEmoji'

const emojiNumber = 99

const GridContainer = styled.div`
  max-width: calc(11 * 30px);
  margin: 64px auto;
`

const Grid = () => {
  const grid = []

  for (let i = 0; i < emojiNumber; i++) {
    grid.push(<NewEmoji key={i} />)
  }

  return (
    <GridContainer>
      {grid}
    </GridContainer>
  )
}

export default Grid