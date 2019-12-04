import React from 'react'
import styled from 'styled-components'

import useMouseData from '../hooks/useMouseData'

const EmojiDiv = styled.div`
  display: inline-block;
  text-align: center;
  width: 30px;
  height: 30px;

  :after {
    content: '${props => props.emoji}';
  }

  :hover {
    cursor: default;
    
    :after { 
      content: '🤡' !important;  
    }
  }
`

const quarter = (n) => n * (Math.PI / 2)
const eigth = Math.PI / 4

const Emoji = props => {
  const [mouseAngle, mouseDistance, elRef] = useMouseData()
  
  const emojiColor = 
  mouseDistance >= 150 ? ['👉🏿', '👆🏿', '👈🏿', '👇🏿'] :
  mouseDistance < 150 && mouseDistance >= 120 ? ['👉🏾', '👆🏾', '👈🏾', '👇🏾'] :
  mouseDistance < 120 && mouseDistance >= 90 ? ['👉🏽', '👆🏽', '👈🏽', '👇🏽'] :
  mouseDistance < 90 && mouseDistance >= 60 ? ['👉🏼', '👆🏼', '👈🏼', '👇🏼'] : ['👉🏻', '👆🏻', '👈🏻', '👇🏻']

  const emoji =
    mouseAngle >= eigth && mouseAngle < quarter(1) + eigth ? emojiColor[0] :
    mouseAngle >= quarter(1) + eigth && mouseAngle < quarter(2) + eigth ? emojiColor[1] :
    mouseAngle >= quarter(2) + eigth && mouseAngle < quarter(3) + eigth ? emojiColor[2] : emojiColor[3]

  return (
    <EmojiDiv
      ref={elRef}
      className={"emoji"}
      emoji={emoji}
      role="img"
      aria-label={props.label ? props.label : ""}
    >
    </EmojiDiv>
  )
}

export default Emoji
