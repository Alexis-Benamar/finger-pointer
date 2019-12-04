import React from 'react'
import styled from 'styled-components'

import useMouseData from '../hooks/useMouseData'

const EmojiSpan = styled.span`
  display: inline-block;
  height: 30px;
  width: 30px;
  text-align: center;
  font-size: 20px;
  transform-origin: 13px 18px;

  :hover {
    cursor: default;
  }

  &.south { transform: rotate(90deg); }
  &.west { transform: rotate(180deg); }
  &.north { transform: rotate(270deg); }
`

const quarter = (n) => n * (Math.PI / 2)
const eigth = Math.PI / 4

const Emoji = props => {
  const [mouseAngle, mouseDistance, elRef] = useMouseData() 

  const direction =
    mouseAngle >= eigth && mouseAngle < quarter(1) + eigth ? 'east' :
    mouseAngle >= quarter(1) + eigth && mouseAngle < quarter(2) + eigth ? 'north' :
    mouseAngle >= quarter(2) + eigth && mouseAngle < quarter(3) + eigth ? 'west' : 'south'

  return (
    <EmojiSpan
      ref={elRef}
      className={"emoji " + direction}
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? false : true}
    >
      {props.symbol}
    </EmojiSpan>
  )
}

export default Emoji
